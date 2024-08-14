import React from "react";

const ProfileHeader = () => {
  return (
    <div className="flex-col bg-blue-600 rounded-[35px] pt-14 ml-[35px]  mb-5 max-w-[80%]">
      <div className="bg-yellow-100 p-4 rounded-b-[35px] shadow-lg flex flex-col items-center">
        <img
          className="w-[90px] h-[90px] rounded-full object-cover mt-[-40px] position: absolute z-0 "
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="m-4 mt-[80px] items-center">
          <h2 className="text-xl font-semibold text-center">Lakshya Bhardwaj</h2>
          <p className="text-gray-600 text-center">Full Stack Developer</p>
          <p className="text-gray-600 text-center">Bhubaneswar</p>
          <hr class="border-t border-gray-300 my-4"/>
          <div className="bg-blue-200 rounded-[20px] p-5 text-sm text-gray-600 mt-2">
            <p>Luytens Technology Solutions</p>
            <p>Exp: Months</p>
            <p>Annual Salary: ___________</p>
            <p>Phone: +91 82342093205</p>
            <p>Email: labhansh40527@gmail.com</p>
          </div>
          <hr class="border-t border-gray-300 my-4"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
