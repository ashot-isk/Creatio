using System;
using Terrasoft.Common;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace UsrRealityFreedomUI
{
    [EntityEventListener(SchemaName = "UsrRealityFreedomUI")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            
            var message = CheckRequiredField(sender, e);
            if (message == null)
            {
                return;
            }

            throw new Exception(message);
        }

        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            var message = CheckRequiredField(sender, e);
            if (message == null)
            {
                return;
            }

            throw new Terrasoft.Core.LicException(message);
        }
        
        private string CheckRequiredField(object sender, EntityBeforeEventArgs e)
        {
            var realty = (Entity)sender;
            var price = realty.GetTypedColumnValue<decimal>("UsrPriceUSD");
            const int maxPrice = 1000000;

            if (price <= 1000000) return null;

            e.IsCanceled = true;

            var messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                "UsrRealtyEvent", "LocalizableStrings.ValueIsTooBig.Value").ToString();

            var message = string.Format(messageTemplate, maxPrice.ToString());
            return message;
        }
    }
}