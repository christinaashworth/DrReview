using DrReview.Models;
using System.Collections.Generic;

namespace DrReview.Repositories
{
    public interface IReviewRepository
    {
        void AddReview(Review review);
        void DeleteReview(int id);
        void EditReview(Review review);
        Review GetReviewById(int id);
        List<Review> GetReviewsByDoctor(int DoctorId);
        List<Review> GetReviewsByUser(int userProfileId);
    }
}