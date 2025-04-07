import React, { useState } from 'react';

const CampaignForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    campaign: {
      productName: '',
      category: '',
      website: '',
      description: '',
      files: [],
      customerPainPoints: '',
      competitors: '',
      usp: '',
    },
    campaignConfig: {
      campaignName: '',
      targetRegion: '',
      maxOutreachPerDay: '',
      preferredDemoDuration: '',
      salesTechniqueStyle: '',
      tonePreference: '',
      objectionHandling: 'reactive',
      ctaPreference: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setFormData((prev) => ({
      ...prev,
      campaign: { ...prev.campaign, files },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const salesTechniques = [
    'Pain-Agitate-Solution (PAS)',
    'Feature-Benefit-CTA',
    'Storytelling / Use Case Driven',
    'Value-Based Selling',
    'Question-Led Discovery Approach',
  ];

  const tonePreferences = [
    'Professional & Formal',
    'Friendly & Conversational',
    'Assertive & Direct',
    'Empathetic & Consultative',
  ];

  const ctaPreferences = [
    'Schedule a Demo',
    'Reply to Learn More',
    'Soft Intro → Demo Invite in Follow-Up',
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-4">Create Message</h2>
      <p className="text-gray-600 mb-8">Design your campaign message and content here</p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="campaign.productName"
            value={formData.campaign.productName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="campaign.category"
            value={formData.campaign.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="url"
            name="campaign.website"
            value={formData.campaign.website}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="campaign.description"
            value={formData.campaign.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Files (max 4: PDF, DOCX)</label>
          <input
            type="file"
            accept=".pdf,.docx"
            multiple
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-lg"
          />
          {formData.campaign.files.length > 0 && (
            <ul className="mt-2">
              {formData.campaign.files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Customer Pain Points Addressed</label>
          <textarea
            name="campaign.customerPainPoints"
            value={formData.campaign.customerPainPoints}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Competitors (optional)</label>
          <input
            type="text"
            name="campaign.competitors"
            value={formData.campaign.competitors}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">USP (optional)</label>
          <input
            type="text"
            name="campaign.usp"
            value={formData.campaign.usp}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
          <input
            type="text"
            name="campaignConfig.campaignName"
            value={formData.campaignConfig.campaignName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Target Region / Timezone</label>
          <input
            type="text"
            name="campaignConfig.targetRegion"
            value={formData.campaignConfig.targetRegion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Outreach Per Day</label>
          <input
            type="number"
            name="campaignConfig.maxOutreachPerDay"
            value={formData.campaignConfig.maxOutreachPerDay}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Demo Duration (minutes)</label>
          <input
            type="number"
            name="campaignConfig.preferredDemoDuration"
            value={formData.campaignConfig.preferredDemoDuration}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sales Technique Style</label>
          <select
            name="campaignConfig.salesTechniqueStyle"
            value={formData.campaignConfig.salesTechniqueStyle}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          >
            <option value="">Select a technique</option>
            {salesTechniques.map((technique) => (
              <option key={technique} value={technique}>
                {technique}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tone Preference</label>
          <select
            name="campaignConfig.tonePreference"
            value={formData.campaignConfig.tonePreference}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          >
            <option value="">Select a tone</option>
            {tonePreferences.map((tone) => (
              <option key={tone} value={tone}>
                {tone}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Objection Handling</label>
          <select
            name="campaignConfig.objectionHandling"
            value={formData.campaignConfig.objectionHandling}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          >
            <option value="reactive">Reactive</option>
            <option value="proactive">Proactive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CTA Preference</label>
          <select
            name="campaignConfig.ctaPreference"
            value={formData.campaignConfig.ctaPreference}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          >
            <option value="">Select a CTA</option>
            {ctaPreferences.map((cta) => (
              <option key={cta} value={cta}>
                {cta}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Save and Continue
      </button>
    </form>
  );
};

export default CampaignForm;