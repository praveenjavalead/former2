/* ========================================================================== */
// AppConfig
/* ========================================================================== */

sections.push({
    'category': 'Management &amp; Governance',
    'service': 'AppConfig',
    'resourcetypes': {
        'Applications': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Configuration Profiles': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'applicationid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Environments': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'applicationid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Deployments': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Deployment Number',
                        field: 'deploymentnumber',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'applicationid',
                        title: 'Application ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'environmentid',
                        title: 'Environment ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Deployment Strategies': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'name',
                        title: 'Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableManagementAndGovernanceAppConfig() {
    blockUI('#section-managementandgovernance-appconfig-applications-datatable');
    blockUI('#section-managementandgovernance-appconfig-configurationprofiles-datatable');
    blockUI('#section-managementandgovernance-appconfig-environments-datatable');
    blockUI('#section-managementandgovernance-appconfig-deployments-datatable');
    blockUI('#section-managementandgovernance-appconfig-deploymentstrategies-datatable');

    await sdkcall("AppConfig", "listApplications", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-appconfig-applications-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-appconfig-configurationprofiles-datatable').bootstrapTable('removeAll');
        $('#section-managementandgovernance-appconfig-environments-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Items.map(async (item) => {
            await sdkcall("AppConfig", "getApplication", {
                ApplicationId: item.Id
            }, true).then(async (data) => {
                $('#section-managementandgovernance-appconfig-applications-datatable').bootstrapTable('append', [{
                    f2id: data.Id,
                    f2type: 'appconfig.application',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    name: data.Name,
                    description: data.Description
                }]);
            });

            await sdkcall("AppConfig", "listEnvironments", {
                ApplicationId: item.Id
            }, true).then(async (data) => {
                await Promise.all(data.Items.map(async (environmentitem) => {
                    await sdkcall("AppConfig", "getEnvironment", {
                        ApplicationId: item.Id,
                        EnvironmentId: environmentitem.Id
                    }, true).then(async (data) => {
                        $('#section-managementandgovernance-appconfig-environments-datatable').bootstrapTable('append', [{
                            f2id: data.Id,
                            f2type: 'appconfig.environment',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            applicationid: data.ApplicationId,
                            name: data.Name,
                            description: data.Description
                        }]);
                    });

                    return sdkcall("AppConfig", "listDeployments", {
                        ApplicationId: item.Id,
                        EnvironmentId: environmentitem.Id
                    }, true).then(async (data) => {
                        await Promise.all(data.Items.map(deploymentitem => {
                            return sdkcall("AppConfig", "getDeployment", {
                                ApplicationId: item.Id,
                                EnvironmentId: environmentitem.Id,
                                DeploymentNumber: deploymentitem.DeploymentNumber
                            }, true).then(async (data) => {
                                $('#section-managementandgovernance-appconfig-configurationprofiles-datatable').bootstrapTable('append', [{
                                    f2id: item.Id + " " + environmentitem.Id + " " + data.DeploymentNumber,
                                    f2type: 'appconfig.deployment',
                                    f2data: data,
                                    f2region: region,
                                    deploymentnumber: data.DeploymentNumber,
                                    applicationid: item.Id,
                                    environmentid: environmentitem.Id,
                                    name: data.Name,
                                    description: data.Description
                                }]);
                            });
                        }));
                    });
                }));
            });

            return sdkcall("AppConfig", "listConfigurationProfiles", {
                ApplicationId: item.Id
            }, true).then(async (data) => {
                await Promise.all(data.Items.map(configprofileitem => {
                    return sdkcall("AppConfig", "getConfigurationProfile", {
                        ApplicationId: item.Id,
                        ConfigurationProfileId: configprofileitem.Id
                    }, true).then(async (data) => {
                        $('#section-managementandgovernance-appconfig-configurationprofiles-datatable').bootstrapTable('append', [{
                            f2id: data.Id,
                            f2type: 'appconfig.configurationprofile',
                            f2data: data,
                            f2region: region,
                            id: data.Id,
                            applicationid: data.ApplicationId,
                            name: data.Name,
                            description: data.Description
                        }]);
                    });
                }));
            });
        }));
    }).catch(() => { });

    await sdkcall("AppConfig", "listDeploymentStrategies", {
        // no params
    }, true).then(async (data) => {
        $('#section-managementandgovernance-appconfig-deploymentstrategies-datatable').bootstrapTable('removeAll');
        
        return Promise.all(data.Items.map(deploymentstrategyitem => {
            return sdkcall("AppConfig", "getDeploymentStrategy", {
                DeploymentStrategyId: deploymentstrategyitem.Id
            }, true).then(async (data) => {
                $('#section-managementandgovernance-appconfig-deploymentstrategies-datatable').bootstrapTable('append', [{
                    f2id: data.Id,
                    f2type: 'appconfig.deploymentstrategy',
                    f2data: data,
                    f2region: region,
                    id: data.Id,
                    name: data.Name,
                    description: data.Description
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-managementandgovernance-appconfig-applications-datatable');
    unblockUI('#section-managementandgovernance-appconfig-configurationprofiles-datatable');
    unblockUI('#section-managementandgovernance-appconfig-environments-datatable');
    unblockUI('#section-managementandgovernance-appconfig-deployments-datatable');
    unblockUI('#section-managementandgovernance-appconfig-deploymentstrategies-datatable');
}