/* ========================================================================== */
// Global Accelerator
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'Global Accelerator',
    'resourcetypes': {
        'Accelerators': {
            'terraformonly': true,
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
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Listeners': {
            'terraformonly': true,
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
                        title: 'Listener ARN',
                        field: 'listenerarn',
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
                        field: 'acceleratorarn',
                        title: 'Accelerator ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'protocol',
                        title: 'Protocol',
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

async function updateDatatableNetworkingAndContentDeliveryGlobalAccelerator() {
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable');
    blockUI('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable');

    await sdkcall("GlobalAccelerator", "listAccelerators", {
        // no params
    }, false).then(async (data) => {
        $('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Accelerators.map(accelerator => {
            return sdkcall("GlobalAccelerator", "describeAccelerator", {
                AcceleratorArn: accelerator.AcceleratorArn
            }, true).then(async (data) => {
                await sdkcall("GlobalAccelerator", "describeAcceleratorAttributes", {
                    AcceleratorArn: accelerator.AcceleratorArn
                }, true).then(async (attributedata) => {
                    data.Accelerator['Attributes'] = attributedata.AcceleratorAttributes;
                });

                $('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable').bootstrapTable('append', [{
                    f2id: data.Accelerator.AcceleratorArn,
                    f2type: 'globalaccelerator.accelerator',
                    f2data: data.Accelerator,
                    f2region: region,
                    name: data.Accelerator.Name,
                    enabled: data.Accelerator.Enabled,
                    creationtime: data.Accelerator.CreatedTime
                }]);

                await sdkcall("GlobalAccelerator", "listListeners", {
                    AcceleratorArn: accelerator.AcceleratorArn
                }, true).then(async (data) => {
                    data.Listeners.forEach(listener => {
                        listener['AcceleratorArn'] = accelerator.AcceleratorArn;

                        $('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable').bootstrapTable('append', [{
                            f2id: listener.ListenerArn,
                            f2type: 'globalaccelerator.listener',
                            f2data: listener,
                            f2region: region,
                            acceleratorarn: accelerator.AcceleratorArn,
                            listenerarn: listener.ListenerArn,
                            protocol: listener.Protocol
                        }]);
                    });
                });
            });
        }));
    }).catch(() => { });

    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-accelerators-datatable');
    unblockUI('#section-networkingandcontentdelivery-globalaccelerator-listeners-datatable');
}
