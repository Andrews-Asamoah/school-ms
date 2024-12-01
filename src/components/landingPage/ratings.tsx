type Ratingsprop = {
  mainText: string;
  subText: string;
};

const Ratings = ({ mainText, subText }: Ratingsprop) => {
  return (
    <div>
      <div className="text-3xl font-bold text-primary">{mainText}</div>
      <div className="text-sm text-gray-600">{subText}</div>
    </div>
  );
};

export default Ratings;
