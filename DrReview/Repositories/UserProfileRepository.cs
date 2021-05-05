using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using DrReview.Models;
using DrReview.Utils;

namespace DrReview.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByFirebaseId(string firebaseId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FirebaseId, up.Username, up.City, up.Email, up.ProfilePhoto, up.DateCreated
                          FROM UserProfile up
                         WHERE FirebaseId = @FirebaseId";

                    DbUtils.AddParameter(cmd, "@FirebaseId", firebaseId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseId = DbUtils.GetString(reader, "FirebaseId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            City = DbUtils.GetString(reader, "City"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ProfilePhoto = DbUtils.GetString(reader, "ProfilePhoto"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FirebaseId, Username, City, Email, ProfilePhoto, DateCreated)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseId, @Username, @City, @Email, @ProfilePhoto, @DateCreated)";
                    DbUtils.AddParameter(cmd, "@FirebaseId", userProfile.FirebaseId);
                    DbUtils.AddParameter(cmd, "@Username", userProfile.Username);
                    DbUtils.AddParameter(cmd, "@City", userProfile.City);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@ProfilePhoto", userProfile.ProfilePhoto);
                    DbUtils.AddParameter(cmd, "@DateCreated", userProfile.DateCreated);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public List<UserProfile> GetUserProfiles()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT up.Id, Up.FirebaseId, up.Username, up.City, up.Email, up.ProfilePhoto, up.DateCreated
                                        FROM UserProfile up
                                        ORDER BY up.Username ASC
                    ";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<UserProfile> profiles = new List<UserProfile>();

                    while (reader.Read())
                    {
                        UserProfile profile = new UserProfile
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseId = DbUtils.GetString(reader, "FirebaseId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            City = DbUtils.GetString(reader, "City"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ProfilePhoto = DbUtils.GetString(reader, "ProfilePhoto"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
                        };
                        profiles.Add(profile);
                    };

                    reader.Close();

                    return profiles;
                }
            }
        }

        public UserProfile GetUserProfileById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT up.Id, Up.FirebaseId, up.Username, up.City, up.Email, up.ProfilePhoto, up.DateCreated
                         FROM UserProfile up
                        WHERE up.id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    UserProfile userProfile = null;
                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseId = DbUtils.GetString(reader, "FirebaseId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            City = DbUtils.GetString(reader, "City"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ProfilePhoto = DbUtils.GetString(reader, "ProfilePhoto"),
                            DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
                        };
                    }

                    reader.Close();
                    return userProfile;
                }
            }
        }
    }
};