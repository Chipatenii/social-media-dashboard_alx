import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const EditProfile = ({ history }) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  });

  const { name, bio } = formData;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userService.getProfile();
        setFormData({
          name: res.data.user.name,
          bio: res.data.user.bio,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await userService.updateProfile(formData);
      history.push('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <textarea name="bio" value={bio} onChange={onChange}></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
