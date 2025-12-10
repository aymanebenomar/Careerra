import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";


// controller for enhancing resume's professional summary
// POST: /api/ai/enhance-pro-sum

export const enhanceProfessionalSummary = async (req, res) => {
	try {
		const {userContent} = req.body;

		if (!userContent){
			return res.status(400).json({message: 'Missing required Fields'})
		}
		
		const response = await ai.chat.completions.create({

			 model: process.env.OPENAI_MODEL,
    		messages: [
						{
							role: "system",

								content: `
								You are a professional resume-writing expert. 
								Your job is to improve the user's Professional Summary

								Requirements:
								- Rewrite the content to be clear, concise, professional, and ATS-friendly.
								- Professional Summary must be 1 to 2 strong sentences.
								- Highlight key skills, achievements, and career goals.
								- Do NOT add irrelevant details or create extra options.
								- ONLY return the rewritten text (no explanations, no headings, no bullets unless the user provides them).
								`
						},
       				 	{
           			 		role: "user",
            				content: userContent,
        				},
    		],

		})

		const enhancedContent = response.choices[0].message.content;
		return res.status(200).json({enhancedContent})

	} catch (error) {

		return res.status(400).json({message: error.message})
	}
}



// controller for enhancing the resume job description
// POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
	try {
		const {userContent} = req.body;

		if (!userContent){
			return res.status(400).json({message: 'Missing required Fields'})
		}
		
		const response = await ai.chat.completions.create({

			 model: process.env.OPENAI_MODEL,
    		 messages: [
						{
							role: "system",

								content: `
								You are a professional resume-writing expert. 
								Your job is to improve the user's Job description

								Requirements:
								- Make the description clear, concise, and ATS-friendly.
								- Highlight measurable achievements, responsibilities, tools, and impact.
								- Keep the tone professional and action-driven.
								- Do NOT invent experience the user didnt provide.
								- Do NOT return explanations, notes, or options — only the improved job description itself IN 1 to 2 line.
								- Preserve bullet points if the user used them; otherwise, return a clean paragraph.

								`
						},
       				 	{
           			 		role: "user",
            				content: userContent,
        				},
    		],

		})

		const enhancedContent = response.choices[0].message.content;
		return res.status(200).json({enhancedContent})

	} catch (error) {

		return res.status(400).json({message: error.message})
	}
}



// , Job Description, or Project Description based on what they provide.  !!!!!!!!!!!!!!!!!



// controller for uploading a resume into the db
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
	try {

		const {resumeText, title} = req.body;
		const userId = req.userId;

		if (!resumeText){
			return res.status(400).json({message: 'Missing required Fields'})
		}

		const systemPrompt = "You are an expert AI agent to extract data from resume.";
		const userPrompt = `extract data from this resume: ${resumeText} 
				Provide data in the following JSON format with no additional text before or after:  
					{
						professional_summary: { type: String, default: ''},
						skills: [{type: String}],

						personal_info: {
							image: {type:  String, default: ''},
							full_name: {type:  String, default: ''},
							profession: {type:  String, default: ''},
							email: {type:  String, default: ''},
							phone: {type:  String, default: ''},
							location: {type:  String, default: ''},
							linkedin: {type:  String, default: ''},
							website: {type:  String, default: ''},
						},

						experience: [
						{
							company: { type: String},
							position: { type: String},
							start_date: { type: String},
							end_date: { type: String},
							description: { type: String},
							is_current: { type: Boolean},
						} ],

						project: [
						{
							name: { type: String},
							type: { type: String},
							description: { type: String},
						}],

						education: [
						{
							institution: { type: String},
							degree: { type: String},
							field: { type: String},
							graduation_date: { type: String},
							gpa: { type: String},
						} ],
					}

			`;

		
		const response = await ai.chat.completions.create({

			 model: process.env.OPENAI_MODEL,
    		 messages: [
						{
							role: "system",

								content: systemPrompt
						},
       				 	{
           			 		role: "user",
            				content: userPrompt,
        				},
    		],

			res_format: {type: 'json_object'}

		})

		const extractedData = response.choices[0].message.content;
		const parsedData = JSON.parse(extractedData)
		const newResume = await Resume.create({userId, title, ...parsedData})


		res.json({resumeId: newResume._id})

	} catch (error) {

		return res.status(400).json({message: error.message})
	}
}