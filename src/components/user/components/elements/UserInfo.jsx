import React from 'react'
import { Input, Button, Textarea } from '@nextui-org/react';
const UserInfo = () => {
  return (
    // <form>
    //   <div className="flex flex-col gap-[2rem] mt-5 items-center">
    //       <Textarea
    //         isReadOnly
    //         label="Description"
    //         variant="bordered"
    //         labelPlacement="outside"
    //         placeholder="Enter your description"
    //         defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
    //         className="max-w-xs"
    //       />
    //       <Input
    //         variant='bordered'
    //         type="text"
    //         label="Username"
    //         placeholder="Username"
    //         className="min-auto lg:max-w-[20rem]"
    //         labelPlacement="outside"
    //         isReadOnly
    //       />
    //       <Input
    //         variant='bordered'
    //         type="email"
    //         label="Email"
    //         placeholder="Email"
    //         className="lg:max-w-[20rem]"
    //         labelPlacement="outside"
    //         isReadOnly
    //       />
    //   </div>
    //   {/* <Button className="mt-3 mb-2" color="primary" variant="shadow" type="submit">
    //     Save
    //   </Button> */}
    // </form>

    <div className="mt-[3rem] flex flex-col  rounded-3xl p-[2rem]">
      <h1 className="font-bold text-lg"> John Doe </h1>
      <p className="text-sm"> Developer </p>
      <p className='py-[2rem]'>
        As a dedicated web developer, I am on a continuous journey of learning and problem-solving. My passion
        lies in crafting seamless digital experiences that resonate with users. I actively explore industry trends,
        attend meetups, and contribute to open-source projects to stay at the forefront of technology.
      </p>
    </div>
  );
}

export default UserInfo