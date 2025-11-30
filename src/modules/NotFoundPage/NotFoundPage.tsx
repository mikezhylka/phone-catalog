import type { FC } from "react";
import { NavLink } from "react-router-dom";

export const NotFoundPage: FC = () => {
  return (
    <div className="px-5 h-[calc(100lvh-3rem)] md:h-[calc(100lvh-4rem)] w-full flex items-center justify-center flex-col gap-8">
      <h1 className="heading-h1 text-center">
        Oops! Seems like this page doesn't exist
      </h1>
      <button className="w-full md:w-[50vw] lg:w-[40vw] flex items-center justify-center">
        <NavLink
          className="bg-primary w-full h-12 rounded-lg flex items-center justify-center hover:bg-secondary hover:border-1 hover:border-primary hover:text-primary text-button text-center text-white"
          to="/"
        >
          Explore our website
        </NavLink>
      </button>
    </div>
  );
};
