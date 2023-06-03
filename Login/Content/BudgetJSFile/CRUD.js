function showInPopup(url, title, module) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function(res) {
            switch (module) {

                case 'Budget Sub Head':
                    $('#modelBudgetSubHead .modal-body').html(res);
                    $('#modelBudgetSubHead .modal-title').html(title);
                    $('#modelBudgetSubHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'BudgetDetailedHead':
                    $('#modelBudgetSubHead .modal-body').html(res);
                    $('#modelBudgetSubHead .modal-title').html(title);
                    $('#modelBudgetSubHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'BudgetMinorHead':
                    $('#modelBudgetMinorHead .modal-body').html(res);
                    $('#modelBudgetMinorHead .modal-title').html(title);
                    $('#modelBudgetMinorHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'BudgetLineItem':
                    $('#modelBudgetLineItem .modal-body').html(res);
                    $('#modelBudgetLineItem .modal-title').html(title);
                    $('#modelBudgetLineItem').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break

                case 'Budget Major Head':
                    $('#modelMajorHead .modal-body').html(res);
                    $('#modelMajorHead .modal-title').html(title);
                    $('#modelMajorHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break

                case 'Cost Centre':
                    $('#modelCostCentre .modal-body').html(res);
                    $('#modelCostCentre .modal-title').html(title);
                    $('#modelCostCentre').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'Finance':
                    $('#modelFinance .modal-body').html(res);
                    $('#modelFinance .modal-title').html(title);
                    $('#modelFinance').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'AccountMajorHead':
                    $('#modelAccountMajorHead .modal-body').html(res);
                    $('#modelAccountMajorHead .modal-title').html(title);
                    $('#modelAccountMajorHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'BudgetCodeCreation':
                    $('#modelBudgetCode .modal-body').html(res);
                    $('#modelBudgetCode .modal-title').html(title);
                    $('#modelBudgetCode').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'AccountWorkOrder':
                    debugger;
                    $('#modelWorkOrder .modal-body').html(res);
                    $('#modelWorkOrder .modal-title').html(title);
                    $('#modelWorkOrder').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break

                case 'ChequeBookEntry':
                    $('#modelChequeBook .modal-body').html(res);
                    $('#modelChequeBook .modal-title').html(title);
                    $('#modelChequeBook').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break

                    //case 'Budget Major Head':
                    //    $('#modelBudgetSubHead .modal-body').html(res);
                    //    $('#modelBudgetSubHead .modal-title').html(title);
                    //    $('#modelBudgetSubHead').modal('show');
                    //    // to make popup draggable
                    //    $('.modal-dialog').draggable({
                    //        handle: ".modal-header"
                    //    });
                    //    break

                case 'Cost Centre':
                    $('#modelBudgetSubHead .modal-body').html(res);
                    $('#modelBudgetSubHead .modal-title').html(title);
                    $('#modelBudgetSubHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break


                case 'AccountCodeCreation':
                    $('#AccountCodeCreation .modal-body').html(res);
                    $('#AccountCodeCreation .modal-title').html(title);
                    $('#AccountCodeCreation').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'AccountLink':
                    $('#AccountLink .modal-body').html(res);
                    $('#AccountLink .modal-title').html(title);
                    $('#AccountLink').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'BudgetEstimates':
                    $('#modelBudgetEstimates1 .modal-body').html(res);
                    $('#modelBudgetEstimates1 .modal-title').html(title);
                    $('#modelBudgetEstimates1').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                case 'BankAccount':
                    $('#modelBankAccount .modal-body').html(res);
                    $('#modelBankAccount .modal-title').html(title);
                    $('#modelBankAccount').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'AccountSubHead':
                    $('#modelAccountSubHead .modal-body').html(res);
                    $('#modelAccountSubHead .modal-title').html(title);
                    $('#modelAccountSubHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'Indents':
                    $('#modelIndents .modal-body').html(res);
                    $('#modelIndents .modal-title').html(title);
                    $('#modelIndents').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'DayBook':
                    $('#modelCheque .modal-body').html(res);
                    $('#modelCheque .modal-title').html(title);
                    $('#modelCheque').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'Grant Template':
                    $('#modelGrantTemplate .modal-body').html(res);
                    $('#modelGrantTemplate .modal-title').html(title);
                    $('#modelGrantTemplate').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'CollegeGrants':
                    debugger
                    $('#modelCollegeGrants .modal-body').html(res);
                    $('#modelCollegeGrants .modal-title').html(title);
                    $('#modelCollegeGrants').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                default:
                    break

                case 'Approve By DCE':
                    $('#modelBudgetSubHead .modal-body').html(res);
                    $('#modelBudgetSubHead .modal-title').html(title);
                    $('#modelBudgetSubHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'Bill Receive Entry':
                    $('#modelMajorHead .modal-body').html(res);
                    $('#modelMajorHead .modal-title').html(title);
                    $('#modelMajorHead').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
                case 'VoucherTemplate':
                    $('#modelVoucherTemplate .modal-body').html(res);
                    $('#modelVoucherTemplate .modal-title').html(title);
                    $('#modelVoucherTemplate').modal('show');
                    // to make popup draggable
                    $('.modal-dialog').draggable({
                        handle: ".modal-header"
                    });
                    break
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function ClosePopupFormsh() {


    $('#modelBudgetSubHead .modal-body').html('');
    $('#modelBudgetSubHead .modal-title').html('');
    $('#modelBudgetSubHead').modal('hide');

    $('#modelFinance .modal-body').html('');
    $('#modelFinance .modal-title').html('');
    $('#modelFinance').modal('hide');

    $('#modelBudgetSubHead .modal-body').html('');
    $('#modelBudgetSubHead .modal-title').html('');
    $('#modelBudgetSubHead').modal('hide');

    $('#modelBudgteCode .modal-body').html('');
    $('#modelBudgteCode .modal-title').html('');
    $('#modelBudgteCode').modal('hide');

    $('#modelBudgetEstimates1 .modal-body').html('');
    $('#modelBudgetEstimates1 .modal-title').html('');
    $('#modelBudgetEstimates1').modal('hide');

    $('#AccountCodeCreation .modal-body').html('');
    $('#AccountCodeCreation .modal-title').html('');
    $('#AccountCodeCreation').modal('hide');

    $('#modelMajorHead .modal-body').html('');
    $('#modelMajorHead .modal-title').html('');
    $('#modelMajorHead').modal('hide');

    $('#modelCostCentre .modal-body').html('');
    $('#modelCostCentre .modal-title').html('');
    $('#modelCostCentre').modal('hide');

    $('#modelBudgetMinorHead .modal-body').html('');
    $('#modelBudgetMinorHead .modal-title').html('');
    $('#modelBudgetMinorHead').modal('hide');

    $('#modelBudgetLineItem .modal-body').html('');
    $('#modelBudgetLineItem .modal-title').html('');
    $('#modelBudgetLineItem').modal('hide');

    $('#modelAccountMajorHead .modal-body').html('');
    $('#modelAccountMajorHead .modal-title').html('');
    $('#modelAccountMajorHead').modal('hide');

    $('#modelAccountSubHead .modal-body').html('');
    $('#modelAccountSubHead .modal-title').html('');
    $('#modelAccountSubHead').modal('hide');

    $('#modelWorkOrder .modal-body').html('');
    $('#modelWorkOrder .modal-title').html('');
    $('#modelWorkOrder').modal('hide');

    $('#modelChequeBook .modal-body').html('');
    $('#modelChequeBook .modal-title').html('');
    $('#modelChequeBook').modal('hide');

}

function fxnDeleteBudgetSubHead(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Budget/Index';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteSubHead',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;

                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || keyCode == 46);
    return ret;
}

function IsAlphaNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (keyCode >= 48 && keyCode <= 57));
    return ret;
}

function fxnDeleteBudgetEstimate(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var beurl = '/Budget/BudgetEstimates';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteBudgetEstimate',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = beurl;

                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

function fxnDeleteAccountCode(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var beurl = '/Account/AccountCodeCreation';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/DeletAccountcode',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = beurl;

                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

function fxnDeleteBudgetCode(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var bcurl = '/Budget/BudgetCodeList';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteBudgetCode',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = bcurl;

                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

function fxnDeleteBudgetDetailedHead(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url6 = '/Budget/BudgetDetailedHead';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteBudgetDetailedHead',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            if (res != null) {
                                bootbox.alert("Record Deleted Successfully !", function() {
                                    window.location.href = url6;

                                });
                            }

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}



//Author: Akhiladevi D M; Module: Minor Head; Date:09/09/2022//
function fxnDeleteBudgetMinorHead(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url5 = '/Budget/BudgetMinorHead'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteBudgetMinorHeadDetails',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url5;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}


//Author: Akhiladevi D M; Module: Line Item; Date:09/09/2022//
function fxnDeleteBudgetLineItem(Id) {
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url4 = '/Budget/BudgetLineItem'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteBudgetLineItemDetails',
                        data: {
                            Id: Id
                        },
                        success: function(res) {

                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url4;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}





//Author: Javeed; Module: Budget Major Head; Date:10/09/2022
function fxnDeleteBudgetMajorHead(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: ("Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url2 = '/Budget/IndexMajorHead/';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteMajorHead',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url2;

                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

//Author: Javeed; Module: Budget Cost Centre; Date:10/09/2022
function fxnDeleteCostCentre(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: ("Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url1 = '/Budget/IndexCostCentre/';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/DeleteCostCentre',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url1;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

//Author: Akhiladevi D M; Module: Account Major Head; Date:12/09/2022//
function fxnDeleteAccountMajorHead(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Account/AccountMajorHead'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/DeleteAccountMajorHeadDetails',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}


//Author: Akhiladevi D M; Module: Account Sub Head; Date:13/09/2022//
function fxnDeleteAccountSubHead(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Account/AccountSubHead'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/DeleteAccountSubHeadDetails',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}


//Author: Javeed; Module: Account Minor Head; Date:14/09/2022//
function fxnDeleteAccountMinorHead(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: ("Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var newurl = '/Account/AccountMinorHead'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/DeleteMinorHead',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = newurl;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

//Author: Akhiladevi D M; Module: Bank Account ; Date:18/09/2022//
function fxnDeleteBankAccount(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Account/BankAccountCreation'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/DeleteBankAccount',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

//Account Code Creation module (link)
function addBankAccount(Id) {

    try {
        debugger;
        var acurl = '/Account/LinkBankAccount';
        var id = Id;
        $.ajax({
            type: 'POST',
            url: '/Account/SaveLinkBankAccountCode',
            data: {
                Id: Id
            },
            success: function(res) {
                if (res != null) {
                    var id = 0;
                    bootbox.alert("Bank Account Linked Successfully.", function() {
                        window.location.href = acurl + "/" + id;

                    });

                }

            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Linking the Bank Account!");
            }
        });

    } catch (ex) {
        console.log(ex)
    }

}

function linkBankAccount(Id) {

    try {
        debugger;
        var acurl = '/Account/ListOfBank';
        var id = 0;
        $.ajax({
            type: 'POST',
            url: '/Account/SaveBankAccountCodeLink',
            data: {
                Id: Id
            },
            success: function(res) {
                if (res != null) {
                    bootbox.alert("Bank Account Linked Successfully.", function() {
                        window.location.href = acurl + "/" + id;

                    });

                }

            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Linking the Bank Account!");
            }
        });

    } catch (ex) {
        console.log(ex)
    }
}

function UnlinkBankaccount(Id) {

    try {
        debugger;
        var acurl = '/Account/LinkBankAccount';
        var id = 0;
        $.ajax({
            type: 'POST',
            url: '/Account/UnLinkBnakAccountCode',
            data: {
                Id: Id
            },
            success: function(res) {
                if (res != null) {

                    bootbox.alert("Bank Account UnLinked Successfully.", function() {
                        window.location.href = acurl + "/" + id;

                    });

                }

            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Linking the Bank Account!");
            }
        });

    } catch (ex) {
        console.log(ex)
    }

}

function fxnLinkBudgetAccountCode(Id) {

    try {
        debugger;
        var acurl = '/Budget/LinkedBudgetAccountCodeList';

        $.ajax({
            type: 'POST',
            url: '/Budget/SaveBudgetAccountCodeLink',
            data: {
                Id: Id
            },
            success: function(res) {
                if (res != null) {
                    var bid = 0
                    bootbox.alert(" Account Code  Linked Successfully.", function() {
                        window.location.href = acurl + "/" + bid;

                    });

                }

            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Linking the Bank Account!");
            }
        });

    } catch (ex) {
        console.log(ex)
    }
}

function fxnUnLinkBudgetAccountCode(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to UnLink this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Budget/BankAccountCreation'
                try {
                    debugger;
                    var acurl = '/Budget/LinkedBudgetAccountCodeList';
                    var id = 0;
                    $.ajax({
                        type: 'POST',
                        url: '/Budget/UnLinkBudgetAccountLink',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            if (res != null) {
                                bootbox.alert(" Account Code  UnLinked Successfully.", function() {
                                    window.location.href = acurl + "/" + id;

                                });
                            }
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Linking the Bank Account!");
                        }
                    });
                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });

}

function fxnAddBudgetEstimate() {
    debugger;
    var grid = document.getElementById("tblBudgetreappropiration");
    var checkBoxes = grid.getElementsByTagName("INPUT");

    const message = [];
    //Loop through the CheckBoxes.
    for (i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            var row = checkBoxes[i].parentNode.parentNode;
            var Ids = row.cells[1].innerHTML;
            var strID = parseInt(Ids);
            message.push(strID);
        }
    }
    if (message.length != 0) {

        const ReferenceNumber = [];

        var RefNumber = message;


        for (i = 0; i < RefNumber.length; i++) {
            ReferenceNumber.push(RefNumber[i]);

        }
        console.log(ReferenceNumber);
        var url = '/Budget/SelectBudgetReappropriation';
        $.ajax({
            type: 'Get',
            url: '/Budget/SelectBudgetReappropriation',
            traditional: true,
            data: {
                BudgetEstCodeId: ReferenceNumber
            },
            success: function(res) {
                if (res != null) {
                    debugger;
                    var id = 0;


                    window.location.href = url + "/" + id;

                }
            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Linking the Bank Account!");
            }
        });

    } else {
        bootbox.alert("Please Select Atleast One Budget Estimate to Re-appropriate!");

    }


}

function SaveBudgetReappropriation() {
    debugger;
    var url = '/Budget/BudgetReappropriationList'
    var budgetDetails = new Array();
    /* var budgetEstimate = new FormData();*/
    debugger;
    /* var total = $("#totalamount").val();*/
    var balance = $("#balance").val();
    if (balance > 0) {

        $("#tblBudgetreappropirationList TBODY TR").each(function() {
            var row = $(this);
            var customer = {};
            customer.ID = row.find("td:eq(1) input[type='text']").val();
            customer.BudgetCodeId = row.find("td:eq(2) input[type='text']").val();
            customer.BudgetReappropriation = row.find("td:eq(11) input[type='number']").val();
            customer.Balance = balance;
            budgetDetails.push(customer);
        });

        $.ajax({
            type: "POST",
            url: "/Budget/SelectBudgetReappropriation",
            data: {
                budgetEstimate: budgetDetails
            },

            success: function(res) {
                if (res != null) {
                    var id = 0;
                    bootbox.alert(" Budget Estimate Reappropriated Successfully.", function() {

                        window.location.href = url;

                    });
                }
            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Budget Estimate Reappropriated!");
            }
        });


    } else

    {
        bootbox.alert("Negative Balance Amount Not Allowed !");

    }

}


//Author: Akhiladevi D M; Module: Link Bank Acc; Date:23/09/2022//
function fxnLinkBankAccountCode(Id) {
    debugger;
    try {
        debugger;
        var acurl = '/Account/ListOfBank';

        $.ajax({
            type: 'POST',
            url: '/Account/SaveBankAccountCodeLink',
            data: {
                Id: Id
            },
            success: function(res) {
                if (res != null) {
                    var bid = 0
                    bootbox.alert(" Account Code and BankAccount ID Linked Successfully.", function() {
                        window.location.href = acurl + "/" + bid;

                    });

                }

            },
            error: function(err) {
                console.log(err)
                bootbox.alert("An Error Occured While Linking the Bank Account!");
            }
        });

    } catch (ex) {
        console.log(ex)
    }
}



//workig 
function fxnUnLinkBankAccountCode(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to UnLink Bank ACC ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Account/AccountCodeLinkBankCode/ListOfBank';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/UnLinkBankAccountCode',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert(" Account Code and BankAccount ID UnLinked Successfully  !", function() {
                                window.location.href = url;

                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

//Author: Akhiladevi D M; Module:Grants Template; Date:29/10/2022//
function fxnDeleteGrantTemplate(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Grants/GrantsTemplate'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Grants/DeleteGrantTemplateDocument',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}


function fxnDeleteUniversityGrant(Id) {

    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to Delete University Grant record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Grants/IndexUniversityGrantsProposal';
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Grants/DeleteUniversityGrant',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;
                            });

                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

// Approve Doc by Dev Patel on 03/11/2022
function ApproveUniversityGrantDoc(Id) {
    debugger
    bootbox.confirm({
        title: "Approve",
        closeButton: false,
        message: ("Are you sure you want to Approve?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Grants/IndexUniversityGrantsApproveDownload';
                try {
                    debugger
                    $.ajax({
                        type: 'POST',
                        url: '/Grants/ApproveUniversityGrantDoc',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Document Approved !", function() {
                                window.location.href = url;
                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Approving !");
                        }
                    });
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    });
}

// Reject Doc by Dev Patel on 03/11/2022
// Upated on 04/11/2022 by Dev Patel
function RejectUniversityGrantDoc(Id) {
    debugger
    bootbox.confirm({
        title: "Reject",
        closeButton: false,
        message: ("Are you sure you want to Reject?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function(result) {
            debugger
            if (result == true) {
                bootbox.prompt({
                    size: "medium",
                    title: "Reason for Rejection",
                    inputType: 'textarea',
                    callback: function(comment) {
                        var RejectComment = comment;
                        debugger
                        if (comment != null) {
                            var url = '/Grants/IndexUniversityGrantsApproveDownload';
                            try {
                                debugger
                                $.ajax({
                                    type: 'POST',
                                    url: '/Grants/RejectUniversityGrantDoc',
                                    data: {
                                        RejectedComments: RejectComment,
                                        Id: Id
                                    },
                                    success: function(res) {
                                        bootbox.alert("Document Rejected !", function() {
                                            window.location.href = url;
                                        });
                                    },
                                    error: function(err) {
                                        console.log(err)
                                        bootbox.alert("An Error Occured While Rejecting !");
                                    }
                                });
                            } catch (ex) {
                                console.log(ex)
                            }
                        }
                    }
                });
            }
        }
    });
}


//Author: Akhiladevi D M; Module:Utilization Certificate; Date:07/11/2022//
function fxnDeleteUtilizationCertificate(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to delete this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Grants/UtilizationCertificate'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Grants/DeleteUtilizationCertificate',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Record Deleted Successfully !", function() {
                                window.location.href = url;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}

// DCEApprove Doc by Dev Patel on 08/11/2022
function DCEApproveDoc(Id) {
    debugger
    bootbox.confirm({
        title: "Approve",
        closeButton: false,
        message: ("Are you sure you want to Approve?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Grants/CollegeGrantsApproveByDCE';
                try {
                    debugger
                    $.ajax({
                        type: 'POST',
                        url: '/Grants/DCEApproveGrantDoc',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Document Approved !", function() {
                                window.location.href = url;
                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Approving !");
                        }
                    });
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    });
}

// DCEReject Doc by Dev Patel on 08/11/2022
function DCERejectDoc(Id) {
    debugger
    bootbox.confirm({
        title: "Reject",
        closeButton: false,
        message: ("Are you sure you want to Reject?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function(result) {
            debugger
            if (result == true) {
                bootbox.prompt({
                    size: "medium",
                    title: "Reason for Rejection",
                    inputType: 'textarea',
                    callback: function(comment) {
                        var RejectComment = comment;
                        debugger
                        if (comment != null) {
                            var url = '/Grants/CollegeGrantsApproveByDCE';
                            try {
                                debugger
                                $.ajax({
                                    type: 'POST',
                                    url: '/Grants/DCERejectGrantDoc',
                                    data: {
                                        RejectedComments: RejectComment,
                                        Id: Id
                                    },
                                    success: function(res) {
                                        bootbox.alert("Document Rejected !", function() {
                                            window.location.href = url;
                                        });
                                    },
                                    error: function(err) {
                                        console.log(err)
                                        bootbox.alert("An Error Occured While Rejecting !");
                                    }
                                });
                            } catch (ex) {
                                console.log(ex)
                            }
                        }
                    }
                });
            }
        }
    });
}
//Author: Akhiladevi D M; Module: Financial Year ; Date:15/11/2022//
function fxnDeleteFinancialYear(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: (" Are you sure you want to inactive this record ?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url5 = '/Finance/Index'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Finance/DeleteFinancialYearDetail',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("Inactivated Record Successfully !", function() {
                                window.location.href = url5;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}


// Accounts Module
//Author: Dev Patel; Module: Account Major Head; Date:02/12/2022
function fxnDeleteAccountMajorHead(Id) {
    debugger;
    bootbox.confirm({
        title: "Confirm",
        closeButton: false,
        message: ("Are you sure you want to delete this Record?"),
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        closeButton: false,
        callback: function(result) {
            if (result == true) {
                var url = '/Account/AccountMajorHead'
                try {
                    debugger;
                    $.ajax({
                        type: 'POST',
                        url: '/Account/DeleteAccountMajorHeaddetails',
                        data: {
                            Id: Id
                        },
                        success: function(res) {
                            bootbox.alert("The record has been successfully Deleted!", function() {
                                window.location.href = url;

                            });
                        },
                        error: function(err) {
                            console.log(err)
                            bootbox.alert("An Error Occured While Deleting the Record!");
                        }
                    });

                } catch (ex) {
                    console.log(ex)
                }

            }
        }
    });
}