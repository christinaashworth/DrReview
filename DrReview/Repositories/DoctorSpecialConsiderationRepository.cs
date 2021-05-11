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
    public class DoctorSpecialConsiderationRepository : BaseRepository
    {
        public DoctorSpecialConsiderationRepository(IConfiguration configuration) : base(configuration) { }

        public List<DoctorSpecialConsideration> GetDoctorSpecialConsiderationsByDoctor(int doctorId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT dsc.Id, dsc.SpecialConsiderationId, dsc.DoctorId, dsc.ReviewId
                                        FROM DoctorSpecialConsideration dsc
                                        JOIN Doctor d ON d.Id = dsc.DoctorId 
                                        WHERE dsc.DoctorId = @doctorId";

                    cmd.Parameters.AddWithValue("@doctorId", doctorId);

                    var reader = cmd.ExecuteReader();
                    var doctorSCs = new List<DoctorSpecialConsideration>();
                    while (reader.Read())
                    {
                        DoctorSpecialConsideration dsc = new DoctorSpecialConsideration
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            SpecialConsiderationId = DbUtils.GetInt(reader, "SpecialConsiderationId"),
                            DoctorId = DbUtils.GetInt(reader, "DoctorId"),
                            ReviewId = DbUtils.GetInt(reader, "ReviewId"),
                        }
                        doctorSCs.Add(dsc);
                    }
                    reader.Close();
                    return doctorSCs;
                }
            }
        }
    }
}
