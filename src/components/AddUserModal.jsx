import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { schema } from "../models/adduser";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { adduser } from "../utils/url";
import { useMutation, useQueryClient } from "react-query";
import { addUser } from "../api/userManagementApi";

const department = ["IT", "Human Resources", "Business"];
const role = ["User", "HR", "Admin", "Supervisor"];
const rightofuse = [
  "User Management",
  "Leave Type Management",
  "Leave Approval",
  "Leave History",
];

const usergroups = ["Male", "Female", "Full-Time", "Probationary", "Part-Time"];

const supervisors = [
  { UserId: "jchan", Username: "Jimmy" },
  { UserId: "Pguardiola4", Username: "Pep" },
  { UserId: "Hxavi6", Username: "Xavi" },
];

const AddUserModal = ({ handleClose }) => {
  const { user } = useGlobalContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();

  // const addNewUser = async (formdata) => {
  //   try {
  //     const { data } = await axios.post(adduser, formdata);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const onSubmitHandler = (data) => {
    const {
      userId,
      password,
      username,
      department,
      role,
      user_group,
      features,
      email,
      phone,
      supervisor,
      annual_balance,
      annual_prebalance,
      sickLeave_balance,
      sickLeave_prebalance,
    } = data;

    const filteredSupervisor = supervisors.filter(
      (obj) => obj.Username === supervisor
    );

    const supervisorId = filteredSupervisor[0].UserId;
    console.log(features);

    const formData = {
      userId,
      password,
      username,
      department,
      role,
      user_group: user_group.toString(),
      features: features === null ? features : features.toString(),
      email,
      phone,
      supervisor,
      approver_leaves_id: supervisorId,
      annual_balance,
      annual_prebalance,
      sickLeave_balance,
      sickLeave_prebalance,
      active: true,
      createBy: user.UserId,
      email_notification: true,
    };
    console.log("------------------------final------------------------");
    console.log(formData);
    addUserMutation.mutate({ ...formData });
    // addNewUser(formData);
    reset();
    handleClose();
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
              autoComplete="off"
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
              autoComplete="off"
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
                    <span className="mr-2 text-sm">{role}</span>
                    <input
                      {...register("role", { required: true })}
                      type="radio"
                      className="mr-2"
                      value={role}
                      id={role}
                    />
                  </label>
                );
              })}
            </div>
          </li>
          <li className="form-li-create">
            <span>User Groups</span>
            <p className="form-error">{errors.user_group?.message}</p>
            <div className="mt-2 grid grid-cols-2">
              {usergroups.map((feature, index) => {
                return (
                  <div key={index}>
                    <label
                      htmlFor={feature}
                      className="inline-flex items-center"
                    >
                      <input
                        type="checkbox"
                        {...register("user_group")}
                        value={feature}
                        id={feature}
                      />
                      <span className="text-sm ml-2">{feature}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </li>
          <li className="form-li-create">
            <span>Features</span>
            <p className="form-error">{errors.features?.message}</p>
            <div className="mt-2 grid grid-cols-2">
              {rightofuse.map((feature, index) => {
                return (
                  <div key={index}>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        {...register("features")}
                        value={feature}
                      />
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
            <div>
              <label htmlFor="supervisor">Supervisor</label>
              <p className="form-error">{errors.supervisor?.message}</p>
            </div>
            <select
              className="form-li-create-input"
              id="supervisor"
              {...register("supervisor")}
            >
              <option value="">Select Supervisor</option>
              {supervisors.map((object, index) => {
                return (
                  <option key={index} value={object.Username}>
                    {object.Username}
                  </option>
                );
              })}
            </select>
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
              min="0"
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
              min="0"
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
              min="0"
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
              min="0"
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
