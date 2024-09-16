function StarRating({ rating }) {
  const validRating = Number.isFinite(rating.avg) ? rating.avg : 0;
  const fullStars = Math.floor(validRating);
  const halfStar = validRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span
            key={`full-${index}`}
            className="fa fa-star text-warning"
          ></span>
        ))}
      {halfStar === 1 && (
        <span className="fa fa-star-half-alt text-warning"></span>
      )}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span
            key={`empty-${index}`}
            className="fa fa-star-o text-warning"
          ></span>
        ))}
    </div>
  );
}
export default StarRating;
