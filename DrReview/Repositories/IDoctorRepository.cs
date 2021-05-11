using DrReview.Models;
using System.Collections.Generic;

namespace DrReview.Repositories
{
    public interface IDoctorRepository
    {
        Doctor GetDoctorById(int Id);
        List<Doctor> GetDoctors();
        List<Doctor> Search(string criterion);
    }
}