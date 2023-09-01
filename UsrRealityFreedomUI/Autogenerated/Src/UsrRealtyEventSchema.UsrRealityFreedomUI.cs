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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,146,77,111,219,48,12,134,239,1,242,31,4,159,108,32,16,182,107,219,13,88,210,180,8,80,116,69,227,244,50,236,160,200,76,170,66,31,6,41,167,205,134,254,247,73,178,211,185,137,209,242,98,11,122,249,240,37,197,134,148,221,178,229,158,60,152,243,241,168,73,199,18,16,5,185,141,231,51,103,140,179,131,23,8,124,110,189,242,10,232,179,123,62,223,129,245,81,54,30,89,97,128,106,33,129,173,8,239,65,104,229,247,87,8,80,57,179,90,140,71,127,199,35,22,226,87,74,221,167,188,27,21,204,89,192,124,41,31,193,136,219,0,96,223,88,54,144,158,21,191,219,244,186,89,107,37,153,212,130,136,69,85,64,157,2,217,25,155,10,130,129,155,150,210,121,233,1,221,46,52,168,42,96,59,167,42,246,211,46,44,1,250,208,121,238,214,79,32,61,35,176,21,224,132,181,204,41,108,194,24,18,249,7,110,137,65,241,159,216,131,199,88,7,35,188,15,60,144,160,56,127,175,220,9,100,152,90,10,83,200,219,66,69,171,30,80,214,168,100,28,87,155,193,175,193,151,251,26,170,153,211,141,177,15,66,55,112,81,129,84,70,232,239,121,28,233,93,212,175,150,151,217,80,89,35,94,238,58,222,215,47,41,142,68,239,79,106,195,242,182,254,197,91,66,17,156,248,6,237,135,137,192,23,52,19,86,130,134,42,212,242,216,64,218,157,19,63,64,36,182,80,130,169,181,240,209,150,133,103,118,227,100,88,139,63,98,173,97,233,49,206,178,107,126,21,102,59,115,214,134,135,82,206,242,123,32,215,160,12,34,135,129,50,57,50,17,227,176,100,221,122,100,19,150,157,208,137,167,49,46,168,116,110,170,182,237,41,43,120,233,186,234,197,71,222,131,103,74,50,126,229,208,8,159,31,245,52,121,27,122,15,120,252,54,254,17,221,115,234,125,254,34,161,142,221,29,56,125,233,107,251,27,62,175,255,0,157,64,116,100,247,3,0,0 };
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

