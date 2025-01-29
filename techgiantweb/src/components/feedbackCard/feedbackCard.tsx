
import ProfilePic from '../../icons/profileIcon'

interface ReviewCardProps {
  name: string;
  rating: number;
  reviewText: string;
  timestamp: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  reviewText,
  timestamp,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-[300px]  shadow-lg transition-all duration-700 hover:scale-110">
      <div className="flex items-center space-x-4 p-4">
        <div className="flex-shrink-0">
            <div className="flex h-12 w-12 rounded-full justify-center align-middle">
            <ProfilePic/>
            </div>
        </div>
        <div>
          <p className="text-gray-900 font-medium">{name}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 border-t">
        <p className="text-gray-700">{reviewText}</p>
        <p className="text-gray-500 text-sm mt-2">{timestamp}</p>
      </div>
    </div>
  );
};

export default ReviewCard;