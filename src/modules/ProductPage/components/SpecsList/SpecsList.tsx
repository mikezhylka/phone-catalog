import type { FC } from "react";

interface Props {
  specs: { title: string; value: string }[];
}

export const SpecsList: FC<Props> = ({ specs }) => {
  return (
    <dl className="mt-8 mb-14">
      {specs.map((spec, index) => (
        <div key={index} className="flex justify-between py-2 gap-6">
          <dt className="text-body text-secondary font-semibold">
            {spec.title}
          </dt>
          <dd className="text-body text-primary font-semibold">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
};
