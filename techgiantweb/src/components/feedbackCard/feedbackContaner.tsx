import ReviewCard from "./feedbackCard";

export const FeedbackContaner = () => {
  return (
    <div className="flex flex-col gap-10 pt-3">
 <div className="flex flex-row gap-2">
      <ReviewCard
        name={"Devika G"}
        rating={5}
        reviewText={
          '"The training program exceeded my expectations. The instructors were highly knowledgeable, and the hands-on approach helped me solidify my skills in software testing."'
        }
        timestamp={"5 months"}
      />
      <ReviewCard
        name={"Sowmya D"}
        rating={5}
        reviewText={
          '"Thanks to the placement support, I secured a job at a leading software company within weeks of completing the training. The guidance and resources provided were invaluable."'
        }
        timestamp={"5 months"}
      />
        <ReviewCard
        name={"Ifham M"}
        rating={4}
        reviewText={
          '"The placement community was a fantastic resource for networking and job leads. I received personalized guidance and support throughout the placement process, which made a significant difference in my job search."'
        }
        timestamp={"5 months"}
      />
    </div>
    <div className="flex flex-row gap-2">
    <ReviewCard
        name={"Kashif J"}
        rating={2}
        reviewText={
          '"I highly recommend this training program. The comprehensive curriculum, industry-experienced instructors, and strong placement support make it a standout choice for anyone looking to pursue a career in software testing."'
        }
        timestamp={"5 months"}
      />
        <ReviewCard
        name={"Kashif J"}
        rating={4}
        reviewText={
          '"I highly recommend this training program. The comprehensive curriculum, industry-experienced instructors, and strong placement support make it a standout choice for anyone looking to pursue a career in software testing."'
        }
        timestamp={"5 months"}
      />
        <ReviewCard
        name={"Kashif J"}
        rating={3}
        reviewText={
          '"I highly recommend this training program. The comprehensive curriculum, industry-experienced instructors, and strong placement support make it a standout choice for anyone looking to pursue a career in software testing."'
        }
        timestamp={"5 months"}
      />
    </div>
    </div>
   
  );
};
