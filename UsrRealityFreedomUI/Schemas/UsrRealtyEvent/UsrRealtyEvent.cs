namespace Terrasoft.Configuration
{
    using System;
    using Common;
    using Core.Entities;
    using Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrRealityFreedomUI")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            var realty = (Entity)sender;
            var price = realty.GetTypedColumnValue<decimal>("UsrPriceUSD");
            
            if (price <= 1000000) return;
            
            e.IsCanceled = true;

            var messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage, 
                "UsrRealtyEvent", "LocalizableStrings.ValueIsTooBig.Value").ToString();

            var message = string.Format(messageTemplate, "1.0B$");
            throw new Exception(message);
        }
    }
}