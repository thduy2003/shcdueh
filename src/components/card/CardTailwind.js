import React from "react";

const CardTailwind = (props) => {
  const AmountClasses = `text-lg font-bold text-transparent bg-clip-text  ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  } `;
  const TextClasses = ` font-medium ${props.fontSize || "text-lg"}`;
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=1000x750&vertical=top"
          alt=""
          className="block rounded-lg w-full h-full object-cover "
        />
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16946975/media/8a158c81922bea0aee537113726fecd4.png?compress=1&resize=1000x750&vertical=top"
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-light text-base text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className={TextClasses}>Cosmic Perspective</h3>
          <span className={AmountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
