/* ========================================================================== */
// IoT 1-Click
/* ========================================================================== */

sections.push({
    'category': 'Internet of Things',
    'service': '1-Click',
    'resourcetypes': {
        'Projects': {
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
                        title: 'Name',
                        field: 'name',
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
        'Placements': {
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
                        title: 'Name',
                        field: 'name',
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
                        field: 'projectname',
                        title: 'Project Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Devices': {
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
                        field: 'type',
                        title: 'Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'remaininglife',
                        title: 'Remaining Life',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableInternetofThings1Click() {
    blockUI('#section-internetofthings-1click-projects-datatable');
    blockUI('#section-internetofthings-1click-placements-datatable');
    blockUI('#section-internetofthings-1click-devices-datatable');

    await sdkcall("IoT1ClickProjects", "listProjects", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-1click-projects-datatable').bootstrapTable('removeAll');
        $('#section-internetofthings-1click-placements-datatable').bootstrapTable('removeAll');

        await Promise.all(data.projects.map(project => {
            return Promise.all([
                sdkcall("IoT1ClickProjects", "listPlacements", {
                    projectName: project.projectName
                }, true).then((data) => {

                    data.placements.forEach(placement => {
                        sdkcall("IoT1ClickProjects", "describePlacement", {
                            projectName: project.projectName,
                            placementName: placement.placementName
                        }, true).then((data) => {
                            $('#section-internetofthings-1click-placements-datatable').bootstrapTable('append', [{
                                f2id: data.placement.placementName,
                                f2type: 'iot1click.placement',
                                f2data: data.placement,
                                f2region: region,
                                name: data.placement.placementName,
                                projectname: data.placement.projectName
                            }]);
                        });
                    });
                }),
                sdkcall("IoT1ClickProjects", "describeProject", {
                    projectName: project.projectName
                }, true).then((data) => {
                    $('#section-internetofthings-1click-projects-datatable').bootstrapTable('append', [{
                        f2id: data.project.projectName,
                        f2type: 'iot1click.project',
                        f2data: data.project,
                        f2region: region,
                        name: data.project.projectName,
                        description: data.project.description
                    }]);
                })
            ]);
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-1click-projects-datatable');
    unblockUI('#section-internetofthings-1click-placements-datatable');

    await sdkcall("IoT1ClickDevicesService", "listDevices", {
        // no params
    }, true).then(async (data) => {
        $('#section-internetofthings-1click-devices-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Devices.map(device => {
            return sdkcall("IoT1ClickProjects", "describeDevice", {
                DeviceId: device.DeviceId
            }, true).then((data) => {
                $('#section-internetofthings-1click-devices-datatable').bootstrapTable('append', [{
                    f2id: data.DeviceDescription.DeviceId,
                    f2type: 'iot1click.device',
                    f2data: data.DeviceDescription,
                    f2region: region,
                    id: data.DeviceDescription.DeviceId,
                    enabled: data.DeviceDescription.Enabled,
                    remaininglife: (data.DeviceDescription.RemainingLife * 100) + "%",
                    type: data.DeviceDescription.Type
                }]);
            });
        }));
    }).catch(() => { });

    unblockUI('#section-internetofthings-1click-devices-datatable');
}
