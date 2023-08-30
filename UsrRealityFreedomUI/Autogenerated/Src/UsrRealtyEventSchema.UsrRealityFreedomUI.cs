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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,82,203,110,219,48,16,188,251,43,22,66,15,18,96,16,201,181,78,10,212,174,83,24,8,218,34,150,115,41,122,160,169,181,194,130,15,97,73,57,117,139,252,123,151,148,221,250,209,116,15,2,180,28,206,206,12,215,73,139,161,147,10,161,70,34,25,252,38,138,153,119,27,221,246,36,163,246,110,244,107,4,92,125,208,174,133,229,46,68,180,147,163,206,204,91,235,221,105,135,80,204,93,212,81,99,120,245,64,204,183,232,226,254,252,107,238,238,114,235,94,243,8,135,84,46,213,19,90,249,137,245,193,45,20,171,64,15,40,13,163,238,8,177,241,118,181,40,170,111,249,118,215,175,141,86,160,140,12,1,18,136,153,46,249,224,45,76,101,192,127,156,100,146,193,229,17,157,223,114,30,186,65,216,122,221,192,103,183,112,1,41,178,143,210,175,191,163,138,16,208,53,72,99,24,24,167,184,97,123,153,247,61,181,1,176,250,67,248,151,58,213,154,69,136,99,186,3,15,86,147,19,224,86,18,80,118,195,254,203,97,74,53,128,47,129,29,105,149,114,26,46,136,143,24,235,93,135,205,204,155,222,186,71,105,122,188,105,80,105,43,205,187,50,101,249,37,225,87,203,15,197,217,208,147,31,189,129,114,32,190,185,133,235,171,92,21,143,136,61,185,255,92,67,177,8,51,233,20,26,108,88,82,164,30,39,163,11,197,188,118,65,182,88,163,237,140,140,73,187,195,103,184,247,138,31,249,167,92,27,92,70,74,241,236,29,173,56,46,222,75,199,201,243,82,138,7,12,190,39,197,32,79,204,50,62,85,144,234,176,49,251,199,46,198,80,92,144,7,145,163,89,132,218,251,169,110,135,191,162,18,181,223,15,175,94,23,206,130,67,6,137,59,79,86,198,242,204,16,207,187,22,87,211,55,231,9,199,39,242,207,217,235,252,135,194,46,185,57,92,61,66,190,140,134,239,203,111,138,211,222,23,160,3,0,0 };
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

