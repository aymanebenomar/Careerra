import React from 'react'
import ModernTemplate from '../assets/templates/ModernTemplate';
import MinimalTemplate from '../assets/templates/MinimalTemplate';
import MinimalImageTemplate from '../assets/templates/MinimalImageTemplate';
import ClassicTemplate from '../assets/templates/ClassicTemplate';

const Resumepreview = ({data, template, accentColor, classes = ""}) => {
	
	const renderTemplate = () => {

		switch (template) {
			case "modern":
				return <ModernTemplate data={data} accentColor={accentColor} />
			case "minimal":
				return <MinimalTemplate data={data} accentColor={accentColor} />
			case "minimal-image":
				return <MinimalImageTemplate data={data} accentColor={accentColor} />;
			default:
				return <ClassicTemplate data={data} accentColor={accentColor} />;
		}
	}

  return (
	<div className='w-full bg-gray-100'>
		<div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none" + classes}>
			{renderTemplate()}
		</div>
			<style jsx>
				{`
					@page {
						size: letter;
						margin: 0;
					}

					@media print {
						html, body {
							width: 8.5in;
							height: 11in;
							overflow: hidden;
						}

						body * {
							visibility: hidden !important;
						}

						#resume-preview, #resume-preview * {
							visibility: visible !important;
						}

						#resume-preview {
							position: absolute !important;
							left: 0;
							top: 0;
							width: 100% !important;
							height: auto !important;
							margin: 0 !important;
							padding: 0 !important;
							box-shadow: none !important;
							border: none !important;
						}
					}
				`}
		</style>
	</div>
  )
}

export default Resumepreview