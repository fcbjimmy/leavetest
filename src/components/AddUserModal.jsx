import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { schema } from "../models/adduser";

const department = ["IT", "Human Resources", "Business"];
const role = ["User", "HR", "Admin", "Supervisor"];
const rightofuse = [
  "User Management,",
  "Leave Type Management",
  "Leave Approval",
  "Leave History",
];
const AddUserModal = ({ handleClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
    // const {
    //   address,
    //   description,
    //   email,
    //   name,
    //   phone,
    //   type,
    //   website,
    //   location,
    //   instagram,
    //   facebook,
    // } = data;
    // const formData = {
    //   address,
    //   description,
    //   email,
    //   name,
    //   phone,
    //   type,
    //   website,
    //   location,
    //   instagram,
    //   facebook,
    // };
    // createProduct(formData);
    reset();
  };

  return (
    <div className="overflow-auto h-[65vh]">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ul>
          <li className="form-li-create">
            <label htmlFor="userId">
              User Id* <p className="form-error">{errors.userId?.message}</p>
            </label>
            <input
              className="form-li-create-input"
              {...register("userId")}
              type="text"
              id="userId"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <label htmlFor="password">
              Password*
              <p className="form-error">{errors.password?.message}</p>
            </label>
            <input
              className="form-li-create-input"
              {...register("password")}
              type="password"
              id="password"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.username?.message}</p>
            <label htmlFor="username">Name*</label>
            <input
              className="form-li-create-input"
              {...register("username")}
              type="text"
              id="username"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.department?.message}</p>
            <label htmlFor="department">Department*</label>
            <input
              className="form-li-create-input"
              {...register("department")}
              type="text"
              id="department"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.user_group?.message}</p>
            <label htmlFor="usergroup">User Group</label>
            <input
              className="form-li-create-input"
              {...register("user_group")}
              type="text"
              id="usergroup"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <span>Role</span>
            <div className="mt-2">
              <p className="form-error">{errors.role?.message}</p>
              {role.map((role, index) => {
                return (
                  <label
                    key={index}
                    htmlFor={role}
                    className="inline-flex items-center"
                  >
                    <span className="mr-2">{role}</span>
                    <input
                      {...register("role")}
                      type="radio"
                      className="mr-2"
                      name="accountType"
                      value={role}
                      id={role}
                    />
                  </label>
                );
              })}
            </div>
          </li>
          <li className="form-li-create">
            <span>Features</span>
            <div className="mt-2 grid grid-cols-2">
              {rightofuse.map((feature, index) => {
                return (
                  <div key={index}>
                    <label className="inline-flex items-center">
                      <input type="checkbox" {...register("features")} />
                      <span className="text-sm ml-2">{feature}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.email?.message}</p>
            <label htmlFor="email">Email</label>
            <input
              className="form-li-create-input"
              {...register("email")}
              type="email"
              id="email"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.phone?.message}</p>
            <label htmlFor="phone">Phone</label>
            <input
              className="form-li-create-input"
              {...register("phone")}
              type="number"
              id="phone"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.supervisor?.message}</p>
            <label htmlFor="supervisor">Supervisor</label>
            <input
              className="form-li-create-input"
              {...register("supervisor")}
              type="text"
              id="supervisor"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.annual_balance?.message}</p>
            <label htmlFor="annual_balance">Annual Balance</label>
            <input
              className="form-li-create-input"
              {...register("annual_balance")}
              type="number"
              id="annual_balance"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.annual_prebalance?.message}</p>
            <label htmlFor="annual_prebalance">Annual Pre Balance</label>
            <input
              className="form-li-create-input"
              {...register("annual_prebalance")}
              type="number"
              id="annual_prebalance"
              placeholder=""
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.sickLeave_balance?.message}</p>
            <label htmlFor="sickLeave_balance">Sick Leave Balance</label>
            <input
              className="form-li-create-input"
              {...register("sickLeave_balance")}
              type="number"
              id="sickLeave_balance"
            />
          </li>
          <li className="form-li-create">
            <p className="form-error">{errors.sickLeave_prebalance?.message}</p>
            <label htmlFor="sickLeave_prebalance">Sick Leave Pre Balance</label>
            <input
              className="form-li-create-input"
              {...register("sickLeave_prebalance")}
              type="number"
              id="sickLeave_prebalance"
              placeholder=""
            />
          </li>
        </ul>
        <div className="flex items-center p-2 space-x-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Confirm
          </button>
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserModal;
