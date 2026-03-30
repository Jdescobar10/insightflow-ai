type Props = {
  title: string;
  value: string | number;
};

export const KPICard = ({ title, value }: Props) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-3xl mt-2 font-bold">{value}</h2>
    </div>
  );
};