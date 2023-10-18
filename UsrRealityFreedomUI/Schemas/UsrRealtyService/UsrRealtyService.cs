using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Configuration;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;

namespace UsrRealityFreedomUI
{
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrRealtyService : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Bare, RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        public ResponseBody GetMaxPrice(ReqModel model)
        {
            var result = new ResponseBody();

            if (model.RealtyTypeId == null || model.RealtyOfferTypeId == null)
            {
                result.ErrorCode = true;
                result.Price = -1;
            }
            else
            {
                var price = ((Select)new Select(UserConnection)
                        .Max("UsrPriceUSD")
                        .From("UsrRealityFreedomUI")
                        .Where("UsrTypeId")
                        .IsEqual(Column.Parameter(model.RealtyTypeId))
                        .And("UsrOfferTypeId")
                        .IsEqual(Column.Parameter(model.RealtyOfferTypeId)))
                    .ExecuteScalar<decimal>();

                result.ErrorCode = false;
                result.Price = price;
            }

            return result ;
        }
    }
    
    [DataContract]
    public class ReqModel
    {
        [DataMember]
		public string RealtyTypeId { get; set; }

        [DataMember] 
		public string RealtyOfferTypeId { get; set; }
    }
    
    public class ResponseBody
    {
        public bool ErrorCode { get; set; }

        public decimal Price { get; set; }
    }
}