using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using DrReview.Models;
using DrReview.Utils;

namespace DrReview.Repositories
{
    public class SpecialConsiderationRepository : BaseRepository, ISpecialConsiderationRepository
    {
        public SpecialConsiderationRepository(IConfiguration configuration) : base(configuration) { }

        public List<SpecialConsideration> GetSpecialConsiderations()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id, [Name]
                                        FROM SpecialConsideration
                                        ";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<SpecialConsideration> specialConsiderations = new List<SpecialConsideration>();

                    while (reader.Read())
                    {
                        SpecialConsideration specialConsideration = new SpecialConsideration
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        };
                        specialConsiderations.Add(specialConsideration);
                    };

                    reader.Close();

                    return specialConsiderations;
                }
            }
        }

        public SpecialConsideration GetSpecialConsiderationById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id, [Name]
                                        FROM SpecialConsideration
                                        WHERE Id = @Id";

                    cmd.Parameters.AddWithValue("@Id", Id);

                    SpecialConsideration specialConsideration = null;
                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        specialConsideration = new SpecialConsideration()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        };
                    };

                    reader.Close();
                    return specialConsideration;
                }
            }
        }
    }
}
