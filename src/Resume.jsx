import { useState } from "react";
import './Resume.css';

function Resume() {
  const [sections, setSections] = useState({
    employment: false, // You can toggle this section's visibility later
  });

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const [languageSkills, setLanguageSkills] = useState([
    { language: "", proficiency: "" },
  ]);

  const [tags, setTags] = useState([]);

  const addTag = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newTag = e.target.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.target.value = "";
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (index, event) => {
    const values = [...languageSkills];
    values[index][event.target.name] = event.target.value;
    setLanguageSkills(values);
  };

  const handleAddFields = () => {
    // Add a new row only if both fields (language and proficiency) are filled
    setLanguageSkills([...languageSkills, { language: "", proficiency: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...languageSkills];
    values.splice(index, 1);
    setLanguageSkills(values);
  };

  return (
    <div className="fok">
      <div className="section-header">
        {/* Toggle Employment Section */}
        <button onClick={() => toggleSection('employment')}>
          {sections.employment ? "Hide Employment Section" : "Show Employment Section"}
        </button>

        {sections.employment && (
          <div className="resume-skills-container">
            {/* Language Skills Section */}
            <div className="language-skills-section">
              {languageSkills.map((skill, index) => (
                <div key={index} className="language-skill-row">
                  <div>
                    <label>Language</label>
                    <select
                      name="language"
                      value={skill.language}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      {/* Add more language options here */}
                    </select>
                  </div>
                  <div className="language-skills-col">
                    <label>Proficiency Level</label>
                    <select
                      name="proficiency"
                      value={skill.proficiency}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">Select Proficiency</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Professional">
                        Professional working proficiency
                      </option>
                      <option value="Native">Native or bilingual proficiency</option>
                    </select>
                  </div>
                  <div className="buttons">
                    <button
                      type="button"
                      onClick={handleAddFields}
                      aria-label="Add Language"
                    >
                      +
                    </button>
                    {languageSkills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveFields(index)}
                        aria-label="Remove Language"
                      >
                        -
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills Section */}
            <div className="App">
              <h4>Skills</h4>
              <div className="tag-input-container">
                {tags.map((tag, index) => (
                  <div key={index} className="tag">
                    <span>{tag}</span>
                    <span
                      className="closed"
                      onClick={() => removeTag(index)}
                      aria-label={`Remove tag ${tag}`}
                    >
                      x
                    </span>
                  </div>
                ))}
                <input
                  type="text"
                  onKeyUp={(e) => addTag(e)}
                  placeholder="Press 'Enter' to add skills"
                  aria-label="Add Skill"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
