import { useState, useEffect } from 'react';

const ProfileCard = () => {
const [image, setImage] = useState("");

useEffect(() => {
// Load image from localStorage when component mounts
const storedImage = localStorage.getItem('profileImage');
if (storedImage) {
    setImage(storedImage);
}
}, []);

const handleImageChange = (e) => {
const file = e.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
    const result = reader.result;
    setImage(result);
    localStorage.setItem('profileImage', result); // Save image to localStorage
    };
    reader.readAsDataURL(file);
}
};

const handleRemoveImage = () => {
setImage("");
localStorage.removeItem('profileImage'); // Remove image from localStorage
};

return (
<section className="mt-10 p-4">
    <div className="w-full md:w-1/2 md:mx-auto flex flex-col md:flex-row items-center justify-center text-center">
    <div className="relative inline-flex object-cover border-4 border-green1 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green1 bg-indigo-50 h-24 w-24 mb-4 md:mb-0 ml-0 md:mr-5">
        {image ? (
        <img className="h-full w-full rounded-full" src={image} alt="Profile" />
        ) : (
        <div className="h-full w-full flex items-center justify-center text-gray-400">
            Add Image
        </div>
        )}

        {/* <img className="h-full w-full rounded-full" src="images/Host.jpg" alt="Profile" /> */}
        <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleImageChange}
        />
    </div>
    {image && (
        <button
        className="mt-4 md:mt-0 md:ml-4 px-4 py-2  text-green1 rounded"
        onClick={handleRemoveImage}
        >
        Remove
        </button>
    )}
    </div>
</section>
);
};

export default ProfileCard;
