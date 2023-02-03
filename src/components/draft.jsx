// import React from "react";

// export const draft = () => {
//   return (
//     <div className="flex flex-col items-center md:flex-row md:justify-evenly border max-w-full overflow-auto">
//       <div className="m-10 bg-white rounded-md drop-shadow-md w-[375px] md:w-[450px]">
//         <form onSubmit={handleSubmit(onSubmitHandler)}>
//           <ul>
//             <li className="form-li-create">
//               <label htmlFor="name">
//                 Name* <p className="form-error">{errors.name?.message}</p>
//               </label>
//               <input
//                 className="form-li-create-input"
//                 {...register("name")}
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//               />
//             </li>
//             <li className="form-li-create">
//               <label htmlFor="description">
//                 Description*
//                 <p className="form-error">{errors.description?.message}</p>
//               </label>
//               <input
//                 className="form-li-create-input"
//                 {...register("description")}
//                 type="text"
//                 id="description"
//                 placeholder="Description"
//               />
//             </li>
//             <li className="form-li-create">
//               <p>{errors.phone?.message}</p>
//               <label htmlFor="phone">Phone*</label>
//               <input
//                 className="form-li-create-input"
//                 {...register("phone")}
//                 type="number"
//                 id="phone"
//                 placeholder="Phone"
//               />
//             </li>
//             <li className="form-li-create">
//               <p>{errors.address?.message}</p>
//               <label htmlFor="address">Address*</label>
//               <input
//                 className="form-li-create-input"
//                 {...register("address")}
//                 type="text"
//                 id="address"
//                 placeholder="address"
//               />
//             </li>
//             <li className="form-li-create">
//               <p>{errors.email?.message}</p>
//               <label htmlFor="email">Email*</label>
//               <input
//                 className="form-li-create-input"
//                 {...register("email")}
//                 type="email"
//                 id="email"
//                 placeholder="email"
//               />
//             </li>
//             <li className="form-li-create">
//               <p>{errors.website?.message}</p>
//               <label htmlFor="website">Website</label>
//               <input
//                 className="form-li-create-input"
//                 {...register("website")}
//                 type="text"
//                 id="website"
//                 placeholder="Website"
//               />
//             </li>
//             <li className="form-li-create">
//               <p>{errors.instagram?.message}</p>
//               <label htmlFor="instagram">Instagram</label>
//               <input
//                 className="form-li-create-input"
//                 {...register("instagram")}
//                 type="text"
//                 id="instagram"
//                 placeholder="Instagram"
//               />
//             </li>
//             <li className="form-li-create">
//               <p>{errors.facebook?.message}</p>
//               <label htmlFor="facebook">Facebook</label>
//               <input
//                 className="form-li-create-input"
//                 {...register("facebook")}
//                 type="text"
//                 id="facebook"
//                 placeholder="Facebook"
//               />
//             </li>
//             <li className="form-li-create">
//               <div>
//                 <label htmlFor="department">Deparment</label>
//               </div>
//               <select
//                 className="form-li-create-input"
//                 id="department"
//                 {...register("department")}
//               >
//                 {department.map((department, index) => {
//                   return (
//                     <option key={index} value={department}>
//                       {department}
//                     </option>
//                   );
//                 })}
//               </select>
//             </li>
//             <li className="form-li-create">
//               <div>
//                 <label htmlFor="location">Role</label>
//               </div>
//               <select
//                 className="form-li-create-input"
//                 id="role"
//                 {...register("role")}
//               >
//                 {role.map((role, index) => {
//                   return (
//                     <option key={index} value={role}>
//                       {role}
//                     </option>
//                   );
//                 })}
//               </select>
//             </li>
//             <li className="m-2 flex justify-end">
//               <button className="bg-emerald-500 mx-2" type="submit">
//                 Create
//               </button>
//             </li>
//           </ul>
//         </form>
//       </div>
//     </div>
//   );
// };


{/* <form className="overflow-auto h-[65vh]">
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />{" "}
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label for="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form> */}