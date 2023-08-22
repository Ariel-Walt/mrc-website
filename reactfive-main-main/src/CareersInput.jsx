/* eslint-disable prettier/prettier */
import React, { useState, useContext, useEffect } from 'react';
import styles from './CareersInput.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import RemoveNavContext from './RemoveNavContext';

const CareersInput = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    linkedin: '',
    coverLetter: '',
    jobPosition: 'Positions'
  });

  const [errors, setErrors] = useState({});
  const { handleToggleAppear, color } = useContext(RemoveNavContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};

    tempErrors.email = formData.email ? (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email) ? "" : "Invalid Email") : "Email required";
    tempErrors.phone = formData.phone ? (/\d{10}/.test(formData.phone) ? "" : "Invalid Phone") : "Phone required";
    tempErrors.address = formData.address ? "" : "Address required";
    tempErrors.position = formData.position ? "" : "Position required";
    tempErrors.linkedin = formData.linkedin ? (/(http(s?):)([/|.|\w|\s|-])*\.(?:linkedin)/.test(formData.linkedin) ? "" : "Invalid LinkedIn URL") : "LinkedIn URL required";
    tempErrors.coverLetter = formData.coverLetter ? "" : "Cover Letter required";

    setErrors(tempErrors);

    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted", formData);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = 'whitesmoke';
    };
  }, [color]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Join the Success</h1>
        <p className={styles.subTitle}>Please fill up the form below</p>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder="First Name" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        <input className={styles.input} placeholder="Last Name" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        <input className={styles.input} placeholder="Email*" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input className={styles.input} placeholder="Phone*" type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        <input className={styles.input} placeholder="Address*" type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        {errors.address && <p className={styles.error}>{errors.address}</p>}
        <input className={styles.input} placeholder="Position*" type="text" id="position" name="position" value={formData.position} onChange={handleChange} />
        {errors.position && <p className={styles.error}>{errors.position}</p>}
        <input className={styles.input} placeholder="LinkedIn Link*" type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        {errors.linkedin && <p className={styles.error}>{errors.linkedin}</p>}
        <input className={styles.input} placeholder="Cover Letter*" type="text" id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleChange} />
        {errors.coverLetter && <p className={styles.error}>{errors.coverLetter}</p>}
        <select className={styles.input} name="jobPosition" value={formData.jobPosition} onChange={handleChange}>
          <option value="Positions"></option>
          <option value="Construction Scheduler">Construction Scheduler</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Civil Senior Level">Civil Senior Level</option>
          <option value="CP Engineer">CP Engineer</option>
          <option value="Site Safety and Health Officer">Site Safety and Health Officer</option>
          <option value="Carpenter">Carpenter</option>
        </select>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <NavLink to="/careersHome">
        <IoCloseOutline className={styles.closeIcon} onClick={handleToggleAppear} />
      </NavLink>
    </div>
  );
};

export default CareersInput;
