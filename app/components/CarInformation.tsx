'use client';

interface CarInformationProps {
  title?: string;
  subtitle?: string;
  information: string;
  textWhite?: boolean;
}

const CarInformation: React.FC<CarInformationProps> = ({
  title,
  subtitle,
  information,
  textWhite,
}) => {
  return (
    <div
      className="
        py-3 
        px-6
        md:py-0 
        md:px-0
        lg:grid
        lg:grid-cols-[410px,1fr]
     "
    >
      <div>
        <p className="text-xl font-medium">{title}</p>
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          {subtitle}
        </h1>
      </div>
      <div>
        <p
          className={`
            mt-5
            lg:mt-0
            text-start 
            font-medium
            md:font-semibold
            lg:font-medium
            ${textWhite ? 'text-white' : 'text-neutral-500'}
          `}
        >
          {information}
        </p>
      </div>
    </div>
  );
};

export default CarInformation;
