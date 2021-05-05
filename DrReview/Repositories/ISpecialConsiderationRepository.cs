using DrReview.Models;
using System.Collections.Generic;

namespace DrReview.Repositories
{
    public interface ISpecialConsiderationRepository
    {
        SpecialConsideration GetSpecialConsiderationById(int Id);
        List<SpecialConsideration> GetSpecialConsiderations();
    }
}