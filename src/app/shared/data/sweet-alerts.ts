import swal from 'sweetalert2'

// // Simple Alert
// export function basicAlert() {
//     swal("Here's a message!");
// }

// // Alert with Title
// export function withTitle() {
//     Swal("Here's a message!", "It's pretty, isn't it?");
// }

// //  HTML Alert
// export function htmlAlert() {
//     Swal({
//         title: 'HTML <small>Title</small>!',
//         html: 'A custom <span style="color:#F6BB42">html<span> message.'
//     });
// }

// // Question Type Alert
// export function typeQuestion() {
//     Swal("Question", "Are You Sure?", "question");
// }

// // Success Type Alert
// export function typeSuccess() {
//     Swal("Good job!", "You clicked the button!", "success");
// }

// // Info Type Alert
// export function typeInfo() {
//     Swal("Info!", "You clicked the button!", "info");
// }

// // Warning Type Alert
// export function typeWarning() {
//     Swal("Warning!", "You clicked the button!", "warning");
// }

// // Error Type Alert
// export function typeError() {
//     Swal("Error!", "You clicked the button!", "error");
// }

// // Custom Icon 
// export function customIcon() {
//     Swal({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/portrait/avatars/avatar-08.png" });
// }

// // Auto close timer
// export function autoClose() {
//     Swal({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
// }

// // Allow Outside Click
// export function outsideClick() {
//     Swal({
//         title: 'Click outside to close!',
//         text: 'This is a cool message!',
//         allowOutsideClick: true
//     });
// }

// // Ajax Request
// export function ajaxRequest() {
//     Swal({
//         title: 'Submit email to run ajax request',
//         input: 'email',
//         showCancelButton: true,
//         confirmButtonText: 'Submit',
//         showLoaderOnConfirm: true,
//         preConfirm: function () {
//             return new Promise(function (resolve) {
//                 setTimeout(function () {
//                     resolve();
//                 }, 2000);
//             });
//         },
//         allowOutsideClick: false
//     }).then(function (email) {
//         if (email) {
//             Swal({
//                 type: 'success',
//                 title: 'Ajax request finished!',
//                 html: 'Submitted email: ' + email
//             });
//         }
//     })
// }

// // Button Options
// export function customButton() {
//     Swal({
//         title: '<i>HTML</i> <u>example</u>',
//         type: 'info',
//         html:
//             'You can use <b>bold text</b>, ' +
//             '<a href="//github.com">links</a> ' +
//             'and other HTML tags',
//         showCloseButton: true,
//         showCancelButton: true,
//         confirmButtonText:
//             '<i class="fa fa-thumbs-up"></i> Great!',
//         cancelButtonText:
//             '<i class="fa fa-thumbs-down"></i> Opps!'
//     })
// }

// // Prompt Function
// export function promptFunction() {
//     Swal.setDefaults({
//         input: 'text',
//         confirmButtonText: 'Next &rarr;',
//         showCancelButton: true,
//         progressSteps: ['1', '2', '3']
//     })

//     var steps = [
//         {
//             title: 'Question 1',
//             text: 'Chaining Swal2 modals is easy'
//         },
//         'Question 2',
//         'Question 3'
//     ]

//     Swal.queue(steps).then((result) => {
//         Swal.resetDefaults()

//         if (result.value) {
//             Swal({
//                 title: 'All done!',
//                 html:
//                     'Your answers: <pre>' +
//                     JSON.stringify(result.value) +
//                     '</pre>',
//                 confirmButtonText: 'Lovely!'
//             })
//         }
//     })

// }

// // Confirm Button Action
// export function confirmText() {
//     Swal({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#0CC27E',
//         cancelButtonColor: '#FF586B',
//         confirmButtonText: 'Text Changed',
//         cancelButtonText: "No, cancel"
//     }).then(function (isConfirm) {
//         if (isConfirm) {
//             Swal(
//                 'Changed!',
//                 'Confirm button text was changed!!',
//                 'success'
//             );
//         }
//     }).catch(Swal.noop);
// }

// // Confirm & Cancel Button
// export function confirmCancelButton() {
//     Swal({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#0CC27E',
//         cancelButtonColor: '#FF586B',
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         confirmButtonClass: 'btn btn-success btn-raised mr-5',
//         cancelButtonClass: 'btn btn-danger btn-raised',
//         buttonsStyling: false
//     }).then(function () {
//         Swal(
//             'Deleted!',
//             'Your imaginary file has been deleted.',
//             'success'
//         )
//     })
// }

// // Chaining modals / Steps
// export function steps() {
//     Swal.setDefaults({
//         confirmButtonText: 'Next &rarr;',
//         showCancelButton: true,
//         cancelButtonColor: '#FF586B',
//         animation: false
//     });

//     var steps = [
//         {
//             title: 'Step 1',
//             text: 'Chaining modals is easy with Step 1'
//         },
//         {
//             title: 'Step 2',
//             text: 'Chaining modals is easy with Step 2'
//         },
//         {
//             title: 'Step 3',
//             text: 'Chaining modals is easy with Step 3'
//         },
//     ];

//     Swal.queue(steps).then(function () {
//         Swal({
//             title: 'All done!',
//             text: 'Great job :)',
//             confirmButtonText: 'Lovely!',
//             showCancelButton: false
//         });
//     }).then(function () {
//         Swal.resetDefaults();
//     }).catch(Swal.noop);
// }