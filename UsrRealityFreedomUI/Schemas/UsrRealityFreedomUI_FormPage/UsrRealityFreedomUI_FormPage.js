define("UsrRealityFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealityFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "55936210-aaf4-407d-bc91-8abad94a5a07",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_qep35no",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_qep35no_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_avu4th7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_3a4sh3d",
					"labelPosition": "auto",
					"control": "$NumberAttribute_3a4sh3d"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_y8fewe4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_z3ys0gd",
					"labelPosition": "auto",
					"control": "$NumberAttribute_z3ys0gd"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_o26lwlg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrPercent",
					"control": "$UsrOfferTypeUsrPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_1p7ix0b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_pze6o3k",
					"labelPosition": "auto",
					"control": "$NumberAttribute_pze6o3k",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_ht22sdw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_to3p4h7",
					"labelPosition": "auto",
					"control": "$LookupAttribute_to3p4h7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_mjfhckp",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_8oqhdj4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_8oqhdj4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_yu12wbe",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yu12wbe_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_mjfhckp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wz9an13",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_bmuwoba",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_oin9asi",
					"labelPosition": "auto",
					"control": "$StringAttribute_oin9asi",
					"multiline": false,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wz9an13",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2hltlmc",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_adq58q8",
					"labelPosition": "auto",
					"control": "$LookupAttribute_adq58q8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wz9an13",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_wo46q44",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_wo46q44_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2hltlmc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_34t8s3f",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ieudidp",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ieudidp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_wz9an13",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ixhro2e",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ixhro2e_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_34t8s3f",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zcolnmg",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_euit7rc",
					"labelPosition": "auto",
					"control": "$LookupAttribute_euit7rc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_wz9an13",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_nkklb04",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_nkklb04_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zcolnmg",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_xy3ggby",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_yze30r1",
					"labelPosition": "auto",
					"control": "$LookupAttribute_yze30r1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_wz9an13",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_14tepsz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_14tepsz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_xy3ggby",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_c7uua77",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_c7uua77_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_xblt4uk",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_c7uua77",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_22v0akd",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_xblt4uk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_npu9nm7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_npu9nm7_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealityVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrPerentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_22v0akd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_660rx8s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_660rx8s_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_yrqv4n9DS"
						}
					}
				},
				"parentName": "FlexContainer_22v0akd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_tlciu3v",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_tlciu3v_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_22v0akd",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_vo373l5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vo373l5_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_yrqv4n9"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tlciu3v",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_1eupdg5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_1eupdg5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealityVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tlciu3v",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_kwzj0r8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_kwzj0r8_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_yrqv4n9"
					]
				},
				"parentName": "FlexContainer_22v0akd",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7591mv1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_c7uua77",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_yrqv4n9",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_yrqv4n9",
					"selectedRows": "$GridDetail_yrqv4n9_SelectedRows",
					"selectionState": "$GridDetail_yrqv4n9_SelectionState",
					"_filterOptions": {
						"from": [
							"GridDetail_yrqv4n9",
							"GridDetail_yrqv4n9_SelectedRows"
						],
						"expose": []
					},
					"_selectionOptions": {
						"attribute": "GridDetail_yrqv4n9_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_yrqv4n9DS_Id",
					"columns": [
						{
							"id": "9c4ba803-27de-bb78-9700-daf4cddad3e1",
							"code": "GridDetail_yrqv4n9DS_UsrComment",
							"caption": "#ResourceString(GridDetail_yrqv4n9DS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "44d56009-e897-b8e2-366d-4b10399f599e",
							"code": "GridDetail_yrqv4n9DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_yrqv4n9DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "deaab3f6-4a35-264d-a5e4-495bcb17179b",
							"code": "GridDetail_yrqv4n9DS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_yrqv4n9DS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "bd358366-1f08-38e0-6360-85082883af6c",
							"code": "GridDetail_yrqv4n9DS_UsrPotetialCustomer",
							"path": "UsrPotetialCustomer",
							"caption": "#ResourceString(GridDetail_yrqv4n9DS_UsrPotetialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "44998d0c-dfcc-c00d-d26e-639b6f371e56",
							"code": "GridDetail_yrqv4n9DS_UsrPerentRealty",
							"path": "UsrPerentRealty",
							"caption": "#ResourceString(GridDetail_yrqv4n9DS_UsrPerentRealty)#",
							"dataValueType": 10,
							"referenceSchemaName": "UsrRealityFreedomUI"
						},
						{
							"id": "00e659df-ea26-882a-470b-93c08e8797a7",
							"code": "GridDetail_yrqv4n9DS_Id",
							"path": "Id",
							"caption": "#ResourceString(GridDetail_yrqv4n9DS_Id)#",
							"dataValueType": 0
						}
					]
				},
				"parentName": "GridContainer_7591mv1",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"NumberAttribute_3a4sh3d": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					},
					"validators": {
						"MyValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 30,
								"message": "Price can not be less than 30.0"
							}
						}
					}
				},
				"NumberAttribute_z3ys0gd": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					},
					"validators": {
						"MyValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 10,
								"message": "Area can not be less than 10.0"
							}
						}
					}
				},
				"LookupAttribute_to3p4h7": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_8oqhdj4": {
					"modelConfig": {
						"path": "PDS.UsrOfferType"
					}
				},
				"StringAttribute_oin9asi": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					},
					"validators": {
                        "required": {
                            "type": "crt.Required"
                        }
                    }
				},
				"LookupAttribute_adq58q8": {
					"modelConfig": {
						"path": "PDS.UsrManager"
					}
				},
				"LookupAttribute_ieudidp": {
					"modelConfig": {
						"path": "PDS.UsrCountry"
					}
				},
				"LookupAttribute_euit7rc": {
					"modelConfig": {
						"path": "PDS.UsrCity"
					}
				},
				"GridDetail_yrqv4n9": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_yrqv4n9DS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "GridDetail_yrqv4n9_PredefinedFilter"
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_yrqv4n9DS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_yrqv4n9DS.UsrComment"
								}
							},
							"GridDetail_yrqv4n9DS_UsrVisitDateTime": {
								"modelConfig": {
									"path": "GridDetail_yrqv4n9DS.UsrVisitDateTime"
								}
							},
							"GridDetail_yrqv4n9DS_UsrPotetialCustomer": {
								"modelConfig": {
									"path": "GridDetail_yrqv4n9DS.UsrPotetialCustomer"
								}
							},
							"GridDetail_yrqv4n9DS_UsrPerentRealty": {
								"modelConfig": {
									"path": "GridDetail_yrqv4n9DS.UsrPerentRealty"
								}
							},
							"GridDetail_yrqv4n9DS_Id": {
								"modelConfig": {
									"path": "GridDetail_yrqv4n9DS.Id"
								}
							}
						}
					}
				},
				"GridDetail_yrqv4n9_PredefinedFilter": {
					"value": null
				},
				"LookupAttribute_yze30r1": {
					"modelConfig": {
						"path": "PDS.UsrRegion"
					}
				},
				"NumberAttribute_pze6o3k": {
					"modelConfig": {
						"path": "PDS.UsrCommissionUSD"
					}
				},
				"UsrOfferTypeUsrPercent": {
					"modelConfig": {
						"path": "PDS.UsrOfferTypeUsrPercent"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealityFreedomUI",
						"attributes": {
							"UsrOfferTypeUsrPercent": {
								"path": "UsrOfferType.UsrPercent",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_yrqv4n9DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealityVisitFreedomUI",
						"attributes": {
							"UsrComment": {
								"path": "UsrComment"
							},
							"UsrVisitDateTime": {
								"path": "UsrVisitDateTime"
							},
							"UsrPotetialCustomer": {
								"path": "UsrPotetialCustomer"
							},
							"UsrPerentRealty": {
								"path": "UsrPerentRealty"
							},
							"Id": {
								"path": "Id"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_yrqv4n9DS": [
					{
						"attributePath": "UsrPerentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_3a4sh3d' || 					// if price changed
					   request.attributeName === 'UsrOfferTypeUsrPercent' ) { 		// or multiplier changed
						var price = await request.$context.NumberAttribute_3a4sh3d;
						var multiplier = await request.$context.UsrOfferTypeUsrPercent;
						var commission = price * multiplier;
						request.$context.NumberAttribute_pze6o3k = commission;
					}
					
					if (request.attributeName === 'NumberAttribute_3a4sh3d') 
                    {
                        var price = await request.$context.NumberAttribute_3a4sh3d;
                        if (price > 50000) 
                        {
                            request.$context.enableAttributeValidator('StringAttribute_oin9asi', 'required');
                        } 
                        else 
                        {
                            request.$context.disableAttributeValidator('StringAttribute_oin9asi', 'required');
                        }
                    }
                    
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
		
			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.NumberAttribute_3a4sh3d;
					this.console.log("Price = " + price);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						
						return valueIsCorrect == true ? result = null : result = 
							{
								"usr.DGValidator": { 
									message: config.message
								}
							};
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});