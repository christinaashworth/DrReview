using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DrReview.Models;

namespace DrReview.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseId(string firebaseId);
        UserProfile GetUserProfileById(int id);
        List<UserProfile> GetUserProfiles();
    }
}