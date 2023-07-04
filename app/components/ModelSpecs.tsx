'use client';

interface ModelSpecsProps {
  title: string;
  subtitle: string;
}

const ModelSpecs: React.FC<ModelSpecsProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-7">
      <div className="border-b border-b-white h-[2px] w-8" />
      <div className="font-semibold mt-3 text-sm md:text-base">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ModelSpecs;
