namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventSchema

	/// <exclude/>
	public class UsrRealtyEventSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventSchema(UsrRealtyEventSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("19e1a7d2-2772-4a08-b29c-ab3575077ba6");
			Name = "UsrRealtyEvent";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("50d81f33-5a31-4fde-a44e-00024f02dc58");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,148,77,143,218,48,16,134,239,72,252,135,81,78,137,132,162,246,90,150,74,37,133,10,9,181,43,62,246,82,245,96,156,1,220,250,35,181,157,236,210,106,255,123,237,36,208,144,132,238,161,61,212,23,112,60,239,235,241,51,30,231,134,201,3,172,79,198,162,24,15,7,121,57,221,160,214,196,168,189,141,19,37,132,146,189,11,26,227,153,180,204,50,52,47,173,199,179,2,165,245,97,195,129,36,2,77,70,40,194,214,232,21,18,206,236,105,174,17,83,37,182,139,225,224,231,112,0,110,124,46,165,167,82,183,100,46,57,137,58,92,211,35,10,242,209,25,192,4,130,30,121,16,125,169,228,89,190,227,140,2,229,196,24,240,81,206,170,107,8,111,96,74,12,246,172,84,46,117,46,13,67,85,184,3,178,20,161,80,44,133,79,114,33,13,106,235,78,30,170,221,87,164,22,12,202,20,245,8,42,207,41,238,29,134,210,249,157,62,24,192,232,183,99,195,220,143,157,75,36,110,26,158,157,48,26,95,71,94,207,10,162,193,1,53,228,224,161,36,71,164,223,86,248,61,103,26,211,57,67,158,222,246,97,123,8,47,202,9,200,156,243,232,58,162,149,162,31,26,109,174,101,203,233,217,215,181,249,193,30,181,122,4,137,143,48,123,162,152,89,166,228,121,171,102,22,87,186,27,132,215,164,248,135,120,107,183,155,76,254,115,154,173,246,90,50,250,18,223,243,223,6,103,205,10,98,17,140,213,190,99,123,206,248,183,172,61,68,93,246,156,99,24,86,242,168,114,235,193,237,242,161,30,118,165,136,63,160,221,156,50,76,19,197,115,33,31,8,207,241,46,69,202,4,225,111,67,223,243,247,62,126,187,126,31,180,43,64,149,52,22,152,180,32,200,211,125,237,250,250,85,57,198,109,166,190,92,213,206,119,151,160,168,174,71,89,188,142,2,227,133,73,136,164,200,49,117,198,86,231,216,137,105,92,159,13,138,140,123,206,147,178,114,75,69,221,83,245,131,236,56,174,75,240,97,125,222,173,235,247,68,73,233,136,187,42,198,43,52,42,215,212,5,41,237,92,70,221,59,115,126,247,234,23,43,24,65,208,49,55,113,9,110,97,54,74,77,217,161,154,5,81,188,81,245,230,209,159,82,119,41,87,151,35,158,43,45,136,13,91,71,26,93,0,55,12,219,213,168,81,214,210,238,165,116,63,207,191,0,65,131,160,39,124,6,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("6de4635f-96b1-cc30-379a-0d00692eeb92"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("50d81f33-5a31-4fde-a44e-00024f02dc58"),
				CreatedInSchemaUId = new Guid("19e1a7d2-2772-4a08-b29c-ab3575077ba6"),
				ModifiedInSchemaUId = new Guid("19e1a7d2-2772-4a08-b29c-ab3575077ba6")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("19e1a7d2-2772-4a08-b29c-ab3575077ba6"));
		}

		#endregion

	}

	#endregion

}

