import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const SuggestedPost = ({className, header,  posts = [], tags}) => {
  return (
    <div className={`w-full rounded-lg p-4 mt-8 ${className}`}>
       <h2 className="font-roboto font-medium text-dark-hard md:text-xl">{header}</h2>
       <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
       {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img className="aspect-square object-cover rounded-lg w-1/12" src={item.image} alt={item.title} />
            <div className="text-sm font-roboto text-dark-hard font-medium">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                <Link to='/blog/1'>{item.title}</Link>
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
       </div>
       <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {tags.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
    </div>
  )
}

export default SuggestedPost