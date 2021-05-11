using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using DrReview.Models;
using DrReview.Utils;

namespace DrReview.Repositories
{
    public class ReviewRepository : BaseRepository, IReviewRepository
    {
        public ReviewRepository(IConfiguration configuration) : base(configuration) { }

        public List<Review> GetReviewsByDoctor(int DoctorId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT r.Id, r.UserProfileId, r.DoctorId, r.Title, r.Content, r.CreateDateTime, up.Username
                                        FROM Review r
                                            LEFT JOIN UserProfile up ON r.UserProfileId = up.Id
                                        WHERE r.DoctorId = @DoctorId
                                        ORDER BY r.CreateDateTime DESC
                                        ";
                    DbUtils.AddParameter(cmd, "DoctorId", DoctorId);
                    var reader = cmd.ExecuteReader();

                    var reviews = new List<Review>();

                    while (reader.Read())
                    {
                        var review = new Review
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                        };
                        review.UserProfile = new UserProfile()
                        {
                            Username = DbUtils.GetString(reader, "Username")
                        };
                        reviews.Add(review);
                    }

                    reader.Close();

                    return reviews;
                }
            }
        }

        public List<Review> GetReviewsByUser(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT r.Id, r.UserProfileId, r.DoctorId, r.Title, r.Content, r.CreateDateTime, up.Username
                                        FROM Review r
                                            LEFT JOIN UserProfile up ON r.UserProfileId = up.Id
                                        WHERE r.UserProfileId = @UserId
                                        ORDER BY r.CreateDateTime DESC
                                        ";

                    cmd.Parameters.AddWithValue("UserId", userProfileId);
                    var reader = cmd.ExecuteReader();

                    var reviews = new List<Review>();

                    while (reader.Read())
                    {
                        var review = new Review
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                        };
                        review.UserProfile = new UserProfile()
                        {
                            Username = DbUtils.GetString(reader, "Username")
                        };
                        reviews.Add(review);
                    }

                    reader.Close();

                    return reviews;
                }
            }
        }

        public Review GetReviewById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT r.Id, r.UserProfileId, r.DoctorId, r.Title, r.Content, r.CreateDateTime, up.Username
                                        FROM Review r
                                            LEFT JOIN UserProfile up ON r.UserProfileId = up.Id
                                        WHERE r.Id = @Id";
                    cmd.Parameters.AddWithValue("@Id", id);
                    var reader = cmd.ExecuteReader();

                    Review review = null;

                    if (reader.Read())
                    {
                        review = new Review
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                        };
                        review.UserProfile = new UserProfile()
                        {
                            Username = DbUtils.GetString(reader, "Username")
                        };
                    }

                    reader.Close();

                    return review;
                }
            }
        }

        public void AddReview(Review review)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Review (UserProfileId, DoctorId, Title, Content, CreateDateTime)
                                        OUTPUT INSERTED.ID
                                        VALUES (@UserProfileId, @DoctorId, @Title, @Content, @CreateDateTime)
                                        ";

                    cmd.Parameters.AddWithValue("@UserProfileId", review.UserProfileId);
                    cmd.Parameters.AddWithValue("@DoctorId", review.DoctorId);
                    cmd.Parameters.AddWithValue("@Title", review.Title);
                    cmd.Parameters.AddWithValue("@Content", review.Content);
                    cmd.Parameters.AddWithValue("@CreateDateTime", review.CreateDateTime);

                    review.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void EditReview(Review review)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Review
                                            SET Title = @Title,
                                                Content = @Content
                                        WHERE id = @id
                                        ";
                    cmd.Parameters.AddWithValue("@id", review.Id);
                    cmd.Parameters.AddWithValue("@Title", review.Title);
                    cmd.Parameters.AddWithValue("@Content", review.Content);

                    cmd.ExecuteScalar();
                }
            }
        }

        public void DeleteReview(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE From Review
                                        WHERE Id = @Id
                                        ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
