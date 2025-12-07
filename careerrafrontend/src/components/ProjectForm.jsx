import React from "react";
import { Plus, Trash2, Folder, Sparkles } from "lucide-react";

const ProjectForm = ({ data, onChange }) => {
  const addproject = () => {
    const newproject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newproject]);
  };

  const removeproject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateproject = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            Projects
          </h3>
          <p className="text-sm text-gray-500">Add your personal or school projects</p>
        </div>

        <button
          onClick={addproject}
          className="flex items-center gap-2 px-3 py-1 text-sm text-blue-700 rounded hover:bg-blue-200 transition-colors"
        >
          <Plus className="size-4" /> Add Project
        </button>
      </div>

      {/* Empty state */}
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Folder className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No projects added yet!</p>
          <p className="text-sm">Click "Add Project" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              {/* Header + Remove */}
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Project #{index + 1}</h4>
                <button
                  onClick={() => removeproject(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-3">
                {/* Project Name */}
                <input
                  value={project.name || ""}
                  onChange={(e) =>
                    updateproject(index, "name", e.target.value)
                  }
                  type="text"
                  placeholder="Project name"
                  className="px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500"
                />

                {/* Project Type */}
                <input
                  value={project.type || ""}
                  onChange={(e) =>
                    updateproject(index, "type", e.target.value)
                  }
                  type="text"
                  placeholder="Type (App, Website, System...)"
                  className="px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Project Description
                  </label>
                  <button className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-300 rounded hover:bg-blue-200 transition-colors">
                    <Sparkles className="w-3 h-3" />
                    Enhance with AI
                  </button>
                </div>

                <textarea
                  rows={4}
                  value={project.description || ""}
                  onChange={(e) =>
                    updateproject(index, "description", e.target.value)
                  }
                  placeholder="Describe what you built, tools used, and your role..."
                  className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg resize-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
