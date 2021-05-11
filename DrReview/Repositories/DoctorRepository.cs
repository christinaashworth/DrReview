using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using DrReview.Models;
using DrReview.Utils;

namespace DrReview.Repositories
{
    public class DoctorRepository : BaseRepository, IDoctorRepository
    {
        public DoctorRepository(IConfiguration configuration) : base(configuration) { }

        public List<Doctor> GetDoctors()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id, [Name], PracticeArea, Location, Gender, Phone, Email, Website, Notes
                                        FROM Doctor
                                        ORDER BY [Name] ASC
                                        ";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Doctor> doctors = new List<Doctor>();

                    while (reader.Read())
                    {
                        Doctor doctor = new Doctor
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            PracticeArea = DbUtils.GetString(reader, "PracticeArea"),
                            Location = DbUtils.GetString(reader, "Location"),
                            Gender = DbUtils.GetString(reader, "Gender"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        };
                        doctors.Add(doctor);
                    };

                    reader.Close();

                    return doctors;
                }
            }
        }

        public Doctor GetDoctorById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT Id, [Name], PracticeArea, Location, Gender, Phone, Email, Website, Notes
                                        FROM Doctor
                                        WHERE Id = @Id
                                        ";

                    cmd.Parameters.AddWithValue("@Id", Id);

                    Doctor doctor = null;
                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        doctor = new Doctor()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            PracticeArea = DbUtils.GetString(reader, "PracticeArea"),
                            Location = DbUtils.GetString(reader, "Location"),
                            Gender = DbUtils.GetString(reader, "Gender"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        };
                    };

                    reader.Close();
                    return doctor;
                }
            }
        }

        public List<Doctor> Search(string criterion)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    var sql = @"
                                SELECT Id, [Name], PracticeArea, Location, Gender, Phone, Email, Website, Notes
                                FROM Doctor
                                WHERE [Name] LIKE @Criterion OR PracticeArea LIKE @Criterion OR Location LIKE @Criterion
                                ";


                    cmd.CommandText = sql;
                    DbUtils.AddParameter(cmd, "@Criterion", $"%{criterion}%");
                    var reader = cmd.ExecuteReader();

                    var doctors = new List<Doctor>();
                    while (reader.Read())
                    {
                        Doctor doctor = new Doctor
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            PracticeArea = DbUtils.GetString(reader, "PracticeArea"),
                            Location = DbUtils.GetString(reader, "Location"),
                            Gender = DbUtils.GetString(reader, "Gender"),
                            Phone = DbUtils.GetString(reader, "Phone"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Website = DbUtils.GetString(reader, "Website"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        };
                        doctors.Add(doctor);
                    };

                    reader.Close();

                    return doctors;
                }
            }
        }
    }
}
