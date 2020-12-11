import React from "react"
import { Link } from "gatsby"

const ProjectNav = () => {
  return (
    <nav className="get-back">
      <Link to="/">
        <svg
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3327 8.53341L23.466 6.66675L15.9993 14.1334L8.53268 6.66675L6.66602 8.53341L14.1327 16.0001L6.66602 23.4667L8.53268 25.3334L15.9993 17.8667L23.466 25.3334L25.3327 23.4667L17.866 16.0001L25.3327 8.53341Z"
            fill="black"
          />
        </svg>
      </Link>
    </nav>
  )
}

export default ProjectNav
