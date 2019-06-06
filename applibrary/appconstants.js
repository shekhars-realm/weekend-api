"use strict";

//========================== Load Modules Start =======================

//========================== Load internal modules ====================

//========================== Load Modules End =======================
const STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1
};

const SUCCESS_MESSAGES = {
    FORGOT_PASS_SENT: "Instructions sent to",
    PRFL_UPDT: "Profile updated successfully",
    PASS_CHANGED: "Password reset successfully! Please login again",
    AVAIL_ADDED: "Availability added successfully",
    AVAIL_EDITED: "Availability edited successfully",
    AVAIL_DELETED: "Availability deleted",
    EMAIL_VERIFIED: "Email verified successfully",
    ADMIN_ADDED: "Admin added successfully.",
    ADMIN_EDITED: "Admin updated successfully.",
    ADMIN_DELETED: "Admin user is deleted",
    USER_MARKED_NO_SHOW: "User marked as no show successfully",
    BOOKING_ACCEPTED: "Booking accepted successfully",
    BOOKING_DECLINED: "Booking declined successfully",
    BOOKING_COMPLETED: "Booking completed successfully",
    BOOKING_CANCELLED: "Booking cancelled successfully",
    LOGOUT: "User is logged out",
    CREATE_PASSWORD: "Token verified",
    CREATE_NEW_PASSWORD: "Password Created Sucessfully",
    NEW_PWD: "Your password has been updated"
};

const ERROR_MESSAGES = {
    INTERNAL_ERROR: "Please try after some time.",
    FIELD_REQUIRED: "Required fields are missing",
    INVALID_EMAIL: "Your email is required and must be in a valid format",
    INVALID_PASSWORD: "Your password is required and must be between 8 - 16 characters with at least 2 of any of the following; capital letter, number, special character e.g.!#.$",
    EMAIL_DECLINED: "We received your application however unfortunately you were unsuccessful. Please contact Quax HQ for any further information",
    INCORRECT_PASS: "Please make sure your passwords match and are at least 8 characters",
    EMAIL_NOT_FOUND_ACCT: "Your account doesn’t appear to exist, please check your details or sign up to continue",
    EMAIL_NOT_FOUND_PAYER: "An account doesn’t appear to exist for this email, please check your login details or create a new account on the sign up page",
    UN_AUTH_ACCESS: "Unauthorized access ",
    ERR_GEN_TKN: "Error while generating access token",
    BAD_TKN: "Bad Token",
    UNVERIFIED: "You are not verified. Please verify your email address",
    PNO_CANT_EMPTY: "Please enter valid phone number",
    FN_CANT_EMPTY: "Please enter valid first name",
    LN_CANT_EMPTY: "Please enter valid last name",
    EMAIL_REGISTER: "An account already exists for this email address.",
    PNO_REGISTER: "Phone number you have entered is already registered",
    NO_USER_FOUND: "No user found.",
    ALREADY_VERIFIED: "You are already verified",
    CMPLT_SIGN_UP: "Please complete your profile first",
    PRVD_SRCH_TERM: "Please provide search string to search",
    TYPE_CNT_EMPTY: "Please provide media type",
    MEDIA_UPLOADED: "Media uploaded successfully",
    PASS_LINK_EXP: "Password link has been expired",
    USER_NOT_FOUND: "User not found",
    START_TIME_EMPTY: "Please provide start time",
    END_TIME_EMPTY: "Please provide end time",
    MAX_DIST_EMPTY: "Please provide max distance",
    REPEAT_WEEKLY_EMPTY: "Please provide occurence",
    LATITUDE_EMPTY: "Please provide latitude",
    LONGITUDE_EMPTY: "Please provide longitude",
    INVALID_ABN: "Please provide valid ABN number",
    INVALID_MAX_CHARS: "Maximum characters exceeded",

    EMAIL_NOT_VERIFIED: "Your account hasn’t been verified. We’ve just sent you another email with a link that will allow you to get started!",
    ACCOUNT_ID_CANT_EMPTY: "Accountant id cannot be empty.",
    TFN_CANT_EMPTY: "A TFN is required and should be 8-9 digits",
    ESTIMATED_COST_CANT_EMPTY: "Estimated cost cannot be empty.",
    NO_OF_RETURN_CANT_EMPTY: "No. of return cannot be empty.",
    BOOKING_DATE_CANT_EMPTY: "Booking date cannot be empty.",
    BOOKING_PHONE_NUMBER_CANT_EMPTY: "Please provide your mobile so that we can get in touch should we need to",
    AVAIL_DATE: "Please provide availability date",

    AVAIL_CANT_EDIT: "Availability cannot be edit.",
    ADMIN_EMAIL_REGISTER: "An account already exists for this email address.",

    OVERLAP_AVAILABILITY: "This availability overlaps with existing availability. Nothing will happen to the existing availability however it may extend to include the start – end time set now",
    OVERLAP_AVAILABILITY_TITLE: "Overlapping Availability",
    AVAILABILITY_OUTSIDE_EFFECTIVE_TIME: "You can add availability within effective time range.",

    BOOKING_CANT_COMPLETE: "Sorry this booking is no longer available.",
    SESSION_EXPIRED: "Session expired",
    AVAILABILITY_OUTSIDE_CURRENT_DATE_RANGE: "Availability outside current date range (7 am to 9 pm)",
    EMAIL_NOT_FOUND_FGT_PWD: "Your account doesn’t appear to exist, please check your email or sign up",

    ACCT_STATUS_INCOMPLETE: "Please check your emails to verify your account before we can proceed",
    ACCT_STATUS_DECLINED: "We received your application however unfortunately you were unsuccessful. Please contact" +
    " Quax HQ for any further information",
    ACCT_STATUS_SUSPENDED: "Please contact Quax admin at tax@quax.com.au",
    PAYER_STATUS_SUSPENDED: "Your account has been suspended. Please contact Quax.",
    ACCT_STATUS_PENDING_APPROVAL: "Your application is being reviewed. You can contact Quax admin at tax@quax.com.au",
    PAYER_STATUS_SIGNUP_INCOMPLETE: "Please check your emails to verify your account before we can proceed",
    BOOKING_DATE_RANGE: "The end date must be a date after the start date",
    BOOKING_DAY_RANGE: "Please enter valid day range",
    BOOKING_NOT_FOUND: "Booking not found",
    PASSWORD_INCORRECT: "Password incorrect",
    NEW_PWD_INCORRECT_MSG: "Your current password does not appear to be correct, please try again",
    CHECK_PAYMENT_INFO: "Please check your payment information",
    CHECK_PAYMENT_TYPE: "Please enter valid payment type",
    EMAIL_NOT_FOUND: "An account doesn’t appear to exist for this email",
    INVALID_BOOKING_STATUS: "Please enter valid booking status",
    ACCESS_DENIED: "Access denied",
    INVALID_BOOKING_MARK_STATUS: "Please enter valid booking mark status",
    BOOKING_ALREADY_MARKED: "Booking status already changed",
    CREATE_CUSTOMER: "Invalid credit card token",
    CANT_EDIT_PAST_AVAILABILITY: "Cannot ADD/EDIT previous Availabilities",
    PLEASE_UPLOAD_MEDIA: "Please Upload some Media",
    UPLOAD_VALID_DOCS: "File upload only supports the following filetypes - ",
    UPLOAD_NON_ANIMATED_GIF: "Please upload non animated GIFs",
    PWD_CANT_EMPTY: "Please enter password",
    WRONG_PWD_ON_LOGIN: "Incorrect Password",
    ACCOUNT_UNVERIFIED: "Your account hasn’t been verified. We’ve just sent you another email with a link that will allow you to get started!",
    TAXPAYER_WRONG_PWD: "Your password does not match the email provided",
    CANNOT_DELETE_THIS_LOCATION: "This Location cannot de deleted!",
    TAXPAYER_EMAIL_NOT_FOUND_FGT_PWD: "An account for this email doesn’t appear to exist, please check your email or sign up",
    BOOKING_ALREADY_REVIEWED: "You have already reviewed the accountant for this booking"
};

const TITLES = {
    EMAIL_NOT_VERIFIED: 'Verify your account',
    OVERLAP_AVAILABILITY_TITLE: "Overlapping Availability",
    OUTSIDE_EFFECTIVE_TIME_AVAILABILITY: "Outside effective time Availability",
    DELETE_AVAILABILITY_TITLE: "Delete Series?",
    ACCT_STATUS_SUSPENDED_TITLE: "Your account is suspended",
    PAYER_SUSPENDED_TITLE: "Login",
    ACCT_STATUS_PENDING_APPROVAL_TITLE: "Pending",
    INCORRECT_PASSWORD: "Oops!",
    PASSWORD_CHANGED: "Success!",
    LOGOUT: "Log Out?",
    RESET_PWD: "New Password"
};

const DB_MODEL_REF = {
    REVIEW: "review",
    BOOKING: "booking",
    AVAIL: "Availability",
    SERVICES: "services",
    LOCATION: "Location",
    NOTES: "Notes",
    REPORT: "Report",
    FEEDBACK: "Feedback",
    USER: "User",
    CONFIG: "config",
    AVAILABILITYSLOT: "AvailabilitySlot",
    SEARCH: "Search"
};

const NOTI_MESSAGES = {
    NEW_BOOKING_REQUEST: {
        SUBJECT: "You have a request for a new booking on Quax!",
        CONTENT: "Hi {firstName}, <br> {taxPayerFirstName} {taxPayerLastName} has requested an appointment with you on {day} {date} at {time} (AWST) at {locAddr}. Please respond within the next 24 hours or we will have to decline it on your behalf.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    NEW_BOOKING_REQUEST_INST: {
        SUBJECT: "You have a new booking on Quax",
        CONTENT: "Hi {firstName},<br><br> {taxPayerFirstName} {taxPayerLastName} has booked an appointment with you on {day} {date} at {time} (AWST) at {locAddr}. Click to see more details.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    REVIEW_FOR_ACCT: {
        SUBJECT: "You have a new review on Quax",
        CONTENT: "Hi {firstName},<br> {payerFirstName} {payerLastName} has reviewed you!",
        LINK: "{link}",
        BTN: "VIEW REVIEW"
    },
    REVIEW_FOR_PAYER: {
        SUBJECT: "You have a new review on Quax",
        CONTENT: "Hi {payerFirstName},<br> {firstName} {lastName} has reviewed you!",
        LINK: "{link}",
        BTN: "VIEW REVIEW"
    },
    BOOKING_CANCELLED_EMAIL: {
        SUBJECT: "You have a cancellation on Quax",
        CONTENT: "Hi {firstName},<br><br> {taxPayerFirstName} {taxPayerLastName} has cancelled their appointment with you on {date} at {time} (AWST) at {locAddr}.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    BOOKING_CANCELLED_EMAIL_FOR_ADMIN_BY_PAYER: {
        SUBJECT: "Booking {_id} Cancelled by Taxpayer within 48 Hours",
        CONTENT: "Hi {adminName},<br><br> A booking {_id} has been cancelled by a taxpayer within 48 hours of the booking start time.<br><br> The Cancellation Policy will apply, and the Taxpayer will be charged $50.00 + GST. <br><br>Payment Method was: {payment}.<br><br>Please view the booking details here:",
        LINK: "{link}", //booking details link
        BTN: "BOOKING DETAIL"
    },
    BOOKING_CANCELLED_BY_ACCT_FOR_PAYER_WITHPOLICY: {
        SUBJECT: "Quax: Appointment Cancelled and 10% off your next booking",
        CONTENT: "Hi {taxPayerFirstName},<br><br> Unfortunately your booking scheduled for {date} at {time} has been cancelled by your Quax Accounant. <br><br>We will apply a 10% discount towards your next booking with QUAX. This will be automatically deducted from your next booking fee.<br><br>Please head to the search page to create a new booking.<br><br>",
        LINK: "{link}",
        BTN: "CANCELLATION POLICY"
    },
    BOOKING_CANCELLED_BY_ACCT_FOR_PAYER_WITHOUT_POLICY: {
        SUBJECT: "Quax: Appointment Cancelled",
        CONTENT: "Hi {taxPayerFirstName},<br><br> Unfortunately your booking scheduled for {date} has had to be cancelled by your Quax Accountant. <br><br>We apologise for any inconvenience.<br><br>Please head to the search page to create a new booking.<br><br>",
    },
    BOOKING_CANCELLED_BY_PAYER_FOR_PAYER_WITHPOLICY: {
        SUBJECT: "Quax:  Cancellation Fee",
        CONTENT: "Hi {taxPayerFirstName},<br><br> Per our agreed Terms of Use, you have been charged a fee of $50 + GST for Late Cancellation (Within 48hrs of the Booking Time) <br><br>Cancellation Fee: $50.00<br>GST: $5.00<br>Total Charge: $55.00<br><br>If you believe an error has been made, please contact QUAX Support via the link below",
        LINK: "{link}", //booking details link
        BTN: "CANCELLATION POLICY"
    },
    BOOKING_CANCELLED_EMAIL_FOR_ADMIN_BY_ACCT: {
        SUBJECT: "Booking {_id} Cancelled by Accountant",
        CONTENT: "Hi {adminName},<br><br> A booking {_id} has been cancelled by an accountant within 48 hours of the booking start time.<br><br> The Cancellation Policy will apply. The taxpayer has been awarded a 10% credit towards their next booking. <br><br>Please view the booking details here:",
        LINK: "{link}", //booking details link
        BTN: "BOOKING DETAIL"
    },
    ACCT_NO_SHOW: {
        SUBJECT: "You didn't show up to your Quax Appointment!",
        CONTENT: "Hi {firstName},<br><br> You were a no show for your appointment with {taxPayerFirstName} {taxPayerLastName} on {date} at {time} (AWST) at {locAddr}.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    ACCT_NO_SHOW_PAYER: {
        SUBJECT: "Quax: $100 off your next booking!",
        CONTENT: "Hi {taxPayerFirstName},<br><br> You marked your Accountant as a No Show.<br> We are actively investigating the reason behind this, and apologise for any inconvenience that may have been caused.<br>If confirmed, you shall receive $100 credit (inc. GST) towards your next booking with QUAX. This will be automatically deducted from your next booking fee.<br> Please head to the search page to create a new booking. ",
    },
    ACCT_NO_SHOW_FOR_ADMIN: {
        SUBJECT: "QUAX: Accountant No Show for Booking {_id}",
        CONTENT: "Hi {adminName},<br> An accountant has been marked as a no show to booking {_id}.<br><br>Accountant Details: {firstName} {lastName}<br>Taxpayer Details: {taxPayerFirstName} {taxPayerLastName}.<br><br> The taxpayer has been awarded a $100 credit towards their next booking. <br> Please view the booking details here:",
        LINK: "{link}", // booking detail for admin
        BTN: "BOOKING DETAIL"
    },
    PAYER_NO_SHOW_FOR_ADMIN: {
        SUBJECT: "QUAX: Taxpayer No Show for Booking {_id}",
        CONTENT: "Hi {adminName},<br> An Taxpayer has been marked as a no show to booking {_id}.<br><br>Accountant Details: {firstName} {lastName}<br>Taxpayer Details: {taxPayerFirstName} {taxPayerLastName}.<br><br> Per the Terms of Use, the Taxpayer will be charged $100.00 + GST.<br>The taxpayers payment method was: {payment} <br> Please view the booking details here:",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    APPROVE_ACCT: {
        SUBJECT: "{firstName} Your Quax Application has been approved!",
        CONTENT: "Hi {firstName},<br><br> You can now get started with Quax. Head to your calendar now to get started and set your availability.",
        LINK: "{link}", // accountant login link
        BTN: "LOGIN"
    },
    DECLINE_ACCT: {
        SUBJECT: "{firstName}, your Quax Application has been declined.",
        CONTENT: "Hi {firstName},<br><br> We regret to inform you that you're application to join Quax was unsuccessful. Thank you for applying."
    },
    NEW_BOOKING_REQUEST_PAYER: {
        SUBJECT: "Your Quax booking has been requested. We will get back to you within 24 hours to confirm. ",
        CONTENT: ""
    },
    NEW_BOOKING_REQUEST_INST_PAYER: {
        SUBJECT: "Confirmation: Your Quax Booking has been set for {bookingDate}",
        CONTENT: ""
    },
    BOOKING_LODGED_EMAIL: {
        SUBJECT: "Quax Booking Lodged",
        CONTENT: "Hi {acctFirstName},<br><br> Your booking with {payerFirstName} {payerLastName} has been marked as Lodged.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    BOOKING_LODGED_EMAIL_PAYER: {
        SUBJECT: "Quax Booking Lodged",
        CONTENT: "Hi {payerFirstName},<br><br> We are pleased to confirm that your Income Tax Return(s) have been lodged with the Australian Taxation Office. The estimated processing time of your assessment is 14 days. Should you have any further queries feel free to contact us via any of the details listed on our website.<br><br>Cost: ${actualCost}<br>GST: ${gst}<br>Total Charge: ${totalCost}<br>Thanks for using Quax!",
    },
    BOOKING_WAITING_ON_INFO: {
        SUBJECT: "Quax Booking Waiting on Info ",
        CONTENT: "Hi {payerFirstName},<br> Your booking with {acctFirstName} {acctLastName} has been marked as Waiting on Info.<br>To complete your booking and lodge your return, Quax Support will be in contact with you shortly.<br>If you require further information please email tax@quax.com.au or call 1300 782 963."
    },
    TOM_UPCOMING_BOOKING_REMINDER: {
        SUBJECT: "Reminder! Appointments Tomorrow",
        CONTENT: "Hi {firstName},<br><br> You have {count} appointments tomorrow. Click to see more details.  ",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    PENDING_BOOKING_REMINDER: {
        SUBJECT: "You have outsanding booking requests on Quax!",
        CONTENT: "You have {count} requests for appointments which have not been actioned yet. You have 12 hours to respond or else they will be automatically declined.",
        LINK: "{link}",
        BTN: "DASHBOARD"
    },
    SUSPEND_ACCT: {
        SUBJECT: "Your Quax Account has been suspended",
        CONTENT: "Hi {firstName},<br><br> Your Quax account has been suspended and any upcoming bookings have been cancelled. You can contact tax@quax.com.au for more information.  "
    },
    UNSUSPEND_ACCT: {
        SUBJECT: "Your Quax Account has been Unsuspended",
        CONTENT: "Hi {firstName},<br><br> Your Quax account has been unsuspended. Any scheduled upcoming availability has become active again so you can start taking bookings.<br> Don’t forget to log in and update your availability if you need!",
        BTN: "LOG IN"
    },
    ACCT_REPORTED: {
        SUBJECT: "QUAX: Reported Accountant {acctId}",
        CONTENT: "This Accountant has been reported by {taxPayerFirstName} {taxPayerLastName}<br><br>Accountant Name: {acctFirstName} {acctLastName}<br><br>The following comment was provided: {comment}<br><br>Click the link below to view the Accountant's profile",
        LINK: "{link}",
        BTN: "ACCOUNTANT PROFILE"
    },
    ADMIN_CREATE_PWD: {
        SUBJECT: "QUAX You've been added as Admin",
        CONTENT: "Hi {firstName},<br><br>You've been added as an Admin user on Quax.Click the  link below to set your password and access your account.",
        DEEP_LINK: "Create Password (30.1)",
        LINK: "{link}",
        BTN: "CREATE PASSWORD"
    },
    NEW_ACCOUNTANT_COMPLETED_APPLICATION: {
        SUBJECT: "QUAX: New Application from {{firstName}} {{lastName}}",
        CONTENT: "Hi {{adminName}},<br><br> {{firstName}} {{lastName}} has completed their application! Click the  link below to review this accountants profile.",
        LINK: "{{link}}",
        BTN: "ACCOUNTANT PROFILE"
    },
    ACCOUNTANT_PROFILE_UPDATED: {
        SUBJECT: "QUAX: {{firstName}} {{lastName}} has update their profile",
        CONTENT: "Hi {{adminName}},<br><br> {{firstName}} {{lastName}} has made changes to their profile.<br> The following profile elements were changed:<br><br> {{fields}} <br><br> Please click the  link below to review the udpates. <br><br> ",
        LINK: "{{link}}",
        BTN: "ACCOUNTANT PROFILE"
    },
    ACCOUNTANT_APPLICATION_RECEIVED: {
        SUBJECT: "{{firstName}}, your Quax Application has been received!",
        CONTENT: "Hi {{firstName}},<br><br> Thanks for applying to be a Quax Professional. Your application has been received and is under review. We will get back to you within 2 business days.",
    },
    ACCT_CREATE_PWD: {
        SUBJECT: "QUAX You've been added as Accountant",
        CONTENT: "Hi {firstName},<br><br>You've been added as an Accountant user on Quax.Click the  link below to set your password and access your account.",
        DEEP_LINK: "Create Password (30.1)",
        LINK: "{link}",
        BTN: "CREATE PASSWORD"
    },
    ACCT_CREATE_PWD_BY_ADMIN: {
        SUBJECT: "Welcome to Quax! Activate your account now by setting a password",
        CONTENT: "Hi {firstName},<br><br>Welcome to Quax! We have created an account for you. Click the link below to set your password and get started.",
        DEEP_LINK: "Create Password (30.1)",
        LINK: "{link}",
        BTN: "CREATE PASSWORD"
    },
    TAXPAYER_CREATE_PWD: {
        SUBJECT: "Welcome to Quax! Please activate your account",
        CONTENT: "Hi {firstName}, <br><br>Welcome to Quax! We have created an account for you. Please click the link below to set your password and activate your account.",
        DEEP_LINK: "Create Password (30.1)",
        LINK: "{link}",
        BTN: "CREATE PASSWORD"
    },
    USR_NOT_RES_TO_PENDING_BKG_WTH_24_HR: {
        SUBJECT: "We had to decline your booking on Quax",
        CONTENT: "Hi {firstName}, <br><br> You failed to respond to a booking request within the required 24 hours and so we had to decline it. Please make sure you check your account daily to avoid this happening in the future.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    PAYER_BOOKING_ACCEPTED_EMAIL: {
        SUBJECT: "Quax Booking Confirmed! {date} at {time} (AWST)",
        CONTENT: "Hi {taxPayerFirstName}, <br><br>Your booking with {firstName} has been confirmed for {date} at {time} (AWST). <br><br>{firstName} will meet you at {locAddr} <br><br>Please ensure you have all your relevant documentation necessary to complete your Tax Return, and ensure you get the best possible outcome!"
    },
    PAYER_BOOKING_REQUEST_EMAIL: {
        SUBJECT: "Quax: Confirmation of Booking Request",
        CONTENT: "Hi {taxPayerFirstName}, <br><br>We have received a booking request with {firstName} to take place on {date}  at {time} (AWST).<br><br> {firstName} will either confirm or decline the appointment within 24 hrs."
    },
    BOOKING_DECLINED_BY_ACCOUNTANT: {
        SUBJECT: "Quax: Booking Request Declined",
        CONTENT: "Hi {taxPayerFirstName}, <br><br>Unfortunately your booking request for {date} at {time} (AWST) was declined by the accountant.<br><br> We encourage you to please head back to the App, where you can schedule another booking."
    },
    BOOKING_ACCEPTED_BY_ACCOUNTANT: {
        SUBJECT: "Quax Booking Confirmed! {date} & {time} (AWST)",
        CONTENT: "Hi {taxPayerFirstName},<br><br> <br><br> Your booking with {firstName} has been confirmed for {date}  at {time} (AWST). {firstName} will meet you at {locAddr}"
    },
    BOOKING_APPOINTMENT_REMINDER_OF_ONE_WEEK: {
        SUBJECT: "Quax Reminder: Booking in 7 days!",
        CONTENT: "Hi {taxPayerFirstName}, <br><br>You have a booking scheduled to take place on {date} at {time} (AWST), {locAddr}.<br><br>Please ensure you have all your relevant documentation necessary to complete your Tax Return, and ensure you get the best possible outcome!"
    },
    BOOKING_APPOINTMENT_REMINDER_OF_ONE_DAY: {
        SUBJECT: "Quax Reminder: Booking Tomorrow!",
        CONTENT: "Hi {taxPayerFirstName}, <br><br>You have a booking scheduled to take place on {date} at {time} (AWST), {locAddr}.<br><br>Please ensure you have all your relevant documentation necessary to complete your Tax Return, and ensure you get the best possible outcome!"
    },
    BOOKING_CANCELLED_BY_ADMIN_FOR_ACCT: {
        SUBJECT: "Booking Cancelled!",
        CONTENT: "Hi {acctFirstName}, <br><br>Your Booking with {payerFirstName} {payerLastName} has been cancelled by Quax.<br><br>Please see Booking Details here.",
        LINK: "{link}",
        BTN: "BOOKING DETAIL"
    },
    BOOKING_CANCELLED_BY_ADMIN_FOR_PAYER: {
        SUBJECT: "Your Booking has been cancelled",
        CONTENT: "Hi {payerFirstName}, <br><br>Unfortunately your booking scheduled for {bookingDate} has had to be cancelled by your Quax.<br>We apologise for any inconvenience.<br>Please head to the search page to create a new booking."
    }
    /*BOOKING_APPOINTMENT_REMINDER_OF_ONE_HOUR: {
     SUBJECT: "Quax Booking Confirmed! {date} & {time} (AWST)",
     CONTENT: "Hi {taxPayerFirstName}, <br><br> Your booking with {firstName} has been confirmed for {date}  at {time} (AWST). {firstName} will meet you at {locAddr}"
     }*/
};

const DOC_FILENAME = {
    0: 'dl',
    1: 'resume',
    2: 'abn',
    3: 'pii',
    4: 'customDoc'
};

const GENDER = {
    ALL: [1, 2],
    MALE: 1,
    FEMALE: 2
};

const PAYMENT_TYPE = {
    FEE_FROM_REFUND: 1,
    CREDIT_CARD: 2
};

const VALUES = {
    PAYER_DISTANCE: 50 * 1000, // 50,000 meters
    SLOT: 2700000,
    ESTCOST: 150, // $
    ENDTIMEOFDAY: "23:59:59",
    FEE_FOR_NO_SHOW_PAYER: 100,
    CREDIT_FOR_NO_SHOW_ACCT: 100,
    CREDIT_PERC: 10, // 10 %, to be changed as per requirement
    ADMIN_EMAIL: "tax@quax.com.au",
    GST_VALUE: 10, //GST %,
    STAG_PERTH_ID: "595a5423744bd3784aa2bf07", //location ID for stag
    PROD_PERTH_ID: "594cf63165bbddc945e259a0", //location ID for prod
    DEV_PERTH_ID: "596f2cf6cdc490b268dfeca1", //location ID for dev
    DEFAULT_LOCATION: "perth"
};

const AVAIL_SERIES = {
    DAILY: 0,
    SERIES: 1,
    OCCURRENCE: 2
};

const DB_PROJ_FIELDS = {
    USER: {
        _id: 1, pno: 1, eml: 1, imv: 1, dp: 1, fn: 1,
        ln: 1, dob: 1, gndr: 1, rcode: 1, isc: 1, favRet: 1
    }
};

const QUEUES_NAME = {
    SEND_OTP: "quaxSendOtp",
    FORGOT_PASS: "quaxForgotPassword"
};

const BOOKING_ACTION = {
    USER_MARKED_NO_SHOW: 0,
    BOOKING_ACCEPTED: 1,
    BOOKING_DECLINED: 2,
    BOOKING_COMPLETED: 3,
    BOOKING_CANCELLED: 4,
    BOOKING_REQUESTED: 5,
    BOOKING_CONFIRM_APPOINTMENT_REMINDER: 66,
    BOOKING_ACCEPTED_EMAIL: 10,
    BOOKING_CANCELLED_EMAIL: 8,
    BOOKING_COMPLETED_EMAIL: 9,
    // For send mail and save notification
    PENDING_BOOKING_REMINDER: "PBR",
    USR_NOT_RES_TO_PENDING_BKG_WTH_24_HR: "NRTPB",
    ACCT_NO_SHOW_FOR_ADMIN: "ANFA",
    PAYER_NO_SHOW_FOR_ADMIN: "PNFA",
    ACCT_NO_SHOW: "ANS",
    PAYER_NO_SHOW: "PNS",
    BOOKING_LODGED: "BL",
    BOOKING_WAITING_ON_INFO: "BWOI",
    PAYER_BOOKING_ACCEPTED_EMAIL: "PBAE",
    PAYER_BOOKING_REQUEST_EMAIL: "PBRE",
    BOOKING_DECLINED_BY_ACCOUNTANT: "BDBA",
    BOOKING_ACCEPTED_BY_ACCOUNTANT: "BABA",
    BOOKING_CONFIRM_APPOINTMENT_REMINDER_BY_EMAIL: "BCARBE",
    BOOKING_CANCELLED_BY_ADMIN: "BCBA",
    TOM_UPCOMING_BOOKING_REMINDER: "TUBR"
};
// No Show Fee Charge
const NO_SHOW_FEE_CHARGE = {
    FOR_TAXPAYER: 100, // if taxpayer no show via accountant
    FOR_ACCOUNTANT: 50
};

const TAXPAYER_CREDIT_FEE = {
    ON_CANCELLATION: 50,
    ON_NO_SHOW: 100
};

const STATUS = {
    INCOMPLETE: 'incomplete',
    DECLINED: 'declined',
    SIGNUP_INCOMPLETE: 'signupIncomplete',
    ACTIVE: 'active',
    SUSPENDED: "suspended",
    PENDING: "pendingApproval",
    ACCTNOSHOW: "acctNoShow",
    PAYERNOSHOW: "payerNoShow",
    UPCOMING: "bookedUpcoming",
    CANCELLED_BY_PAYER: "cancelledByPayer",
    CANCELLED_BY_ACCT: "cancelledByAcct",
    CANCELLED_BY_ADMIN: "cancelledByAdmin",
    COMPLETE_PEND_LODG: "completePendingLodge",
    UNSUSPEND: "unsuspended"
};

const REIMBURSEMENTS = {
    CANCELLED_BY_ACCT: "10% Off on next Booking",
    NO_SHOW_BY_ACCT: "$100 credited to Wallet"
}

const READABLE_USER_FIELD_ARRAY = ['First Name', 'Last Name', 'Home Address', 'Instant Book', 'Date of Birth', 'Phone Number', 'ABN', 'About Me', 'Professional Experience', 'Custom Document']

const USER_FIELD_ARRAY = ['firstName', 'lastName', 'homeAddress', 'instantBook', 'dob', 'pno', 'abn', 'aboutMe', 'profExp', 'customDocName']

const BOOKING_STATUS_ARR = ['pendingRequest', 'overdue', 'completePendingLodge', 'lodged', 'completeWaitingOnInfo',
    'cancelledByAcct', 'declined', 'acctNoShow', 'bookedUpcoming', 'payerNoShow', 'cancelledByPayer', 'cancelledByAdmin'];

const BOOKING_MARK_STATUS_ARR = [0, 1, 2, 3, 4];

//Incase of unauthorized user
const RESPONSE_STATUS_CODE = {
    UNAUTHORIZED: 401
};

const LOGOUT_ERROR_CODE = "ERR31";

const ACCESS_API_WITHOUT_ACTIVE_STATUS = {
    EDIT_PROFILE: "/editprofile",
    PAYER_LIST_LOC: "/listloc",
    UPLOAD_MEDIA: "/uploadmedia",
    GET_PROFILE: "/getprofile",
    UPLOAD_DOC: "/uploaddocs",
    LOGOUT: "/logout"
};

const BOOKING_FIELD_TO_SHOW = {
    status: 1, startTime: 1, endTime: 1, estCost: 1, actualCost: 1,
    services: 1, estReturn: 1, actualReturn: 1, tfn: 1, pno: 1, latlng: 1, ptype: 1, bookingDate: 1,
    instantBook: 1, returns: 1, locAddr: 1, cat: 1, adminEntries: 1, mat: 1, fee: 1, reimbursement: 1,
    availability: 1, markedBy: 1, slotId: 1, lodgedAt: 1, last4: 1, gst: 1, totalCost: 1, searchStatus: 1,
    adminEntriesAddedAt: 1, adminEntriesAdded: 1, percentDis: 1, walletDis: 1, cancelGst: 1, completeWaitingAt: 1, pendingLodgedAt: 1,
    discount: 1, invoiceSentOrIgnoredAt: 1, invoiceSentOrIgnored: 1, noShowGst: 1, additionalAmt: 1, additionalDis: 1, adjusmentPercent: 1, adjusmentAmount: 1
};

const ACCOUNTANT_FEILD_TO_SHOW = {
    firstName: 1,
    lastName: 1,
    email: 1,
    profilePic: 1,
    aboutMe: 1,
    profExp: 1,
    latlng: 1,
    instantBook: 1,
    homeAddress: 1,
    dob: 1,
    gender: 1,
    pno: 1,
    abn: 1,
    docs: 1,
    acStatus: 1,
    cat: 1,
    totalIncome: 1,
    totalReturn: 1,
    customDocName: 1
}

const BOOKING_FIELD_TO_SHOW_FOR_CSV = [
    "Booking Date", "Booking ID", "Taxpayer", "Booking Status", "Est. Cost", "Actual Cost"
];

// Admin booking fields to show
const ADMIN_BOOKING_FIELD_TO_SHOW_FOR_CSV = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost", "Actual Cost"
];
//END

//Admin portal accountant CSV
const ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_ALL = [
    "Status", "First Name", "Last Name", "User ID", "Contact Number", "Email Address"
];

const ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_ACTIVE = [
    "Status", "First Name", "Last Name", "User ID", "Contact Number", "Email Address", "Member Since", "Last Active"
];

const ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_PENDING = [
    "Status", "First Name", "Last Name", "User ID", "Contact Number", "Email Address", "Application Submitted"
];

const ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_DECLINED = [
    "Status", "First Name", "Last Name", "User ID", "Contact Number", "Email Address", "Date Declined"
];

const ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_SUSPENDED = [
    "Status", "First Name", "Last Name", "User ID", "Contact Number", "Email Address", "Date Suspended"
];

const ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_INCOMPLETE = [
    "Status", "First Name", "Last Name", "User ID", "Contact Number", "Email Address", "Last Active"
];

// END

// Taxpayer CSV fields to show
const TAXPAYER_FEILD_TO_SHOW_FOR_CSV_ALL = [
    "Status", "First Name", "Last Name", "User ID", "Email Address", "Member Since"
];

const TAXPAYER_FEILD_TO_SHOW_FOR_CSV_ACTIVE = [
    "Status", "First Name", "Last Name", "User ID", "Email Address", "Member Since", "Last Active"
];

const TAXPAYER_FEILD_TO_SHOW_FOR_CSV_SUSPENDED = [
    "Status", "First Name", "Last Name", "User ID", "Email Address", "Member Since", "Date Suspended"
];

const TAXPAYER_FEILD_TO_SHOW_FOR_CSV_UNVERIFIED = [
    "Status", "First Name", "Last Name", "User ID", "Email Address", "Member Since"
];
// END

//Start booking csv fields to show
const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_ALL = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost", "Actual Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_PENDING = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_UPCOMING = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_OVERDUE = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_PENDING_LODGEMENT = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost", "Actual Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_LODGED = [
    "Booking Status", "Date Lodged", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost", "Actual Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_WAITING_ON_INFO = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost", "Actual Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_NO_SHOW = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_CANCELLED = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost"
];

const ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_DECLINED = [
    "Booking Status", "Booking Date", "Booking ID", "Admin Entries", "Taxpayer Lastname", "Accountant Lastname", "Est. Cost"
];

// END
const METRICES_FEILD_TO_SHOW_FOR_CSV = [
    "retrunsPerBooking", "avgActualCost", "totalBookings", "avgEstimatedCost", "avgAcctRating", "percentBookingCancelledByPayer", "percentBookingCancelledByAccountant", "percentBookingNoShowAcct",
    "percentBookingNoShowPayer", "percentBookingInstantBooked", "percentBookingRequestBooking", "percentBookingByFeeFromRefund", "percentBookingByCC", "avgDaysSpentfrom_PendingLodge_to_Lodged", "avgDaysSpentOnInfo", "avgDaysSpentOnPendingLodge", "avgAcctPerSearch","percentOfSearchResultingInBooking", "percentOfSearchNoResult"
];

const METRICES_FEILD_TO_SHOW_FOR_CSV_READABLE = [
    "Returns per Booking", "Average Actual Cost", "Total Bookings", "Average Estimated Cost", "Average Accountant Rating", "% of Booking Cancelled By Taxpayer", "% of Booking Cancelled By Accountant", "% of Booking No Show By Accountant",
    "% of Booking No Show By Taxpayer", "% of Instant Bookings", "% of Request Bookings", "% of Fee from Refund Bookings", "% of Bookings done by Credit Card", "Average Days Spent on Pending Lodgement to Lodged", "Average days spent on Waiting on Info", "Average Days spent on Pending Lodged", "Average Accountant per Search","% of search that results in Booking", "% of search that results in no Booking"
];

const FILTER_BY_LAST_DAY = {
    SEVEN: 1,
    FOURTEEN: 2,
    THIRTY: 3
};

const LAST_DAY = {
    SEVEN: 7,
    FOURTEEN: 14,
    THIRTY: 30
};

const MEDIA_TYPE = {
    PHOTO: 1,
    DOCS: 2,
    COUNT: 5,
    IMAGE_MAX_SIZE: 1024 * 1024 * 5,
    DOC_MAX_SIZE: 1024 * 1024 * 5
};

const USR_IMG_PATH = 'uploads';

const DATE_FORMAT = 'DD/MM/YY';

const AVAILABILITY_SLOT = 15 * 60 * 1000;

const LAST_AVAILABILITY_SLOT = 72900000;

const ROLE = {
    ACCT: 'acct',
    ADMIN: 'admin',
    PAYER: 'taxpayer',
    SUPER_ADMIN: "superadmin"
};

const BOOKING_CREATED_BY = {
    ADMIN: "Added",
    TAXPAYER: "Not Added"
};

const BOOKING_STATUS = {
    PENDING_REQUEST: "pendingRequest",
    UPCOMING: "bookedUpcoming",
    OVERDUE: "overdue",
    PENDING_LODGE: "completePendingLodge",
    LODGED: "lodged",
    WAITING: "completeWaitingOnInfo",
    CANCELLED_BY_ACCT: "cancelledByAcct",
    CANCELLED_BY_PAYER: "cancelledByPayer",
    CANCELLED_BY_ADMIN: "cancelledByAdmin",
    DECLINED: "declined",
    ACCNOSHOW: "acctNoShow",
    PAYERNOSHOW: "payerNoShow",

    // Status for searching
    BK_SEARCH_PENDING_REQUEST: "Pending Request",
    BK_SEARCH_UPCOMING: "Confirmed - Upcoming",
    BK_SEARCH_OVERDUE: "Overdue - Mark as Complete",
    BK_SEARCH_PENDING_LODGE: "Completed - Pending Lodgement",
    BK_SEARCH_LODGED: "Lodged",
    BK_SEARCH_WAITING: "Completed - Waiting On Info",
    BK_SEARCH_CANCELLED_BY_ACCT: "Cancelled by Accountant",
    BK_SEARCH_CANCELLED_BY_PAYER: "Cancelled by Taxpayer",
    BK_SEARCH_CANCELLED_BY_ADMIN: "Cancelled by Admin",
    BK_SEARCH_DECLINED: "Request Declined",
    BK_SEARCH_ACCNOSHOW: "No Show - Accountant",
    BK_SEARCH_PAYERNOSHOW: "No Show - Taxpayer"
};
// Notification type
const NOTI_TYPE = {
    // Taxpayer Notification Type
    BOOKING_CONFIRM_APPOINTMENT: 1,
    BOOKING_REQUEST_CANCELLED_BY_ACCOUT: 2,
    BOOKING_LODGED_PAYER: 33,
    //For one week
    BOOKING_CONFIRM_APPOINTMENT_REMINDER: 4,
    BOOKING_CANCELLED_BY_ADMIN_PANEL_PAYER: 66,
    BOOKING_CANCELLED_BY_ACCOUT_NOFEE: 16,
    PAYER_NO_SHOW_BY_ACCT_FOR_PAYER: 34,
    BOOKING_CANCELLED_BY_ACCOUT_WITHFEE: 17,
    BOOKING_CANCELLED_BY_PAYER_WITHFEE: 39,
    BOOKING_CANCELLED_BY_PAYER: 18,
    BOOKING_MARKNOSHOW_BY_ACCOUNT: 19,
    BOOKING_MARKNOSHOW_BY_PAYER: 20,
    BOOKING_REQUEST_CANCELLED_BY_PAYER: 24,
    BOOKING_REQUEST_CANCELLED_BY_ACCT: 25,
    BOOKING_REQUEST_CANCELLED_BY_ACCT_NO_PLOICY: 28,
    BOOKING_REQUEST_CANCELLED_BY_PAYER_NO_PLOICY: 29,
    BOOKING_DECLINED_BY_ACCOUNTANT: 32,
    PAYER_NO_SHOW_FOR_PAYER: 37,
    ONE_DAY_BOOKING_CONFIRM_APPOINTMENT_REMINDER: 35,
    ONE_HOUR_BOOKING_CONFIRM_APPOINTMENT_REMINDER: 36,
    BOOKIN_WAITING_ON_INFO_FOR_PAYER: 88,

    // Accountant Notification Type
    BOOKING_LODGED_EMAIL: 5,
    ACCT_REPORTED: 6,
    TOM_UPCOMING_BOOKING_REMINDER: 7,
    BOOKING_CANCELLED_BY_ADMIN_PANEL_ACCT: 77,
    PENDING_BOOKING_REMINDER: 8,
    BOOKING_LODGED: 3,
    BOOKING_CONFIRM_APPOINTMENT_EMAIL: 9,
    BOOKING_CANCELLED_EMAIL: 10,
    ACCT_NO_SHOW: 11,
    SUSPEND_ACCT: 12,
    UNSUSPEND_ACCT: 13,
    PAYER_NO_SHOW_FOR_ACCT: 38,
    APPROVE_ACCT: 14,
    DECLINE_ACCT: 15,
    REVIEW_FOR_ACCT: 30,

    // EMAIL NOTIFICATION TYPE
    ADMIN_CREATE_PASSWORD: 21,
    NEW_ACCOUNTANT_COMPLETED_APPLICATION: 22,
    ACCOUNTANT_PROFILE_UPDATED: 23,
    USR_NOT_RES_TO_PENDING_BKG_WTH_24_HR: 31,
    ACCT_NO_SHOW_FOR_ADMIN: 26,
    PAYER_NO_SHOW_FOR_ADMIN: 27

};
// Notification msg
const NOTI_MSG = {
    BOOKING_CONFIRM_APPOINTMENT: "You have a booking scheduled to take place on {date}  at {time} (AWST). {locAddr}",
    REVIEW_FOR_ACCT: "{{taxPayerFirstName}} {{taxPayerLastName}} has reviewed you!",
    REVIEW_FOR_PAYER: "{{firstName}} {{lastName}} has reviewed you!",
    BOOKING_APPOINTMENT_ACCEPTED: "Your Booking has been accepted!",
    BOOKING_APPOINTMENT_CANCELLED: "We apologise for any inconvenience. Head to the search page to create a new booking.",
    BOOKING_APPOINTMENT_CANCELLED_BY_ACCT: "Your appointment with {{name}} is cancelled",
    BOOKING_APPOINTMENT_CANCELLED_BY_ACCT_ADMIN: "{{firstName}} {{lastName}} cancelled an upcoming booking. The cancellation policy DOES apply.",
    BOOKING_REQUEST_CANCELLED_BY_ACCT_NO_PLOICY: "{{firstName}} {{lastName}} cancelled an upcoming booking. The cancellation policy DOES NOT apply.",
    BOOKING_REQUEST_CANCELLED_BY_PAYER_NO_PLOICY: "{{firstName}} {{lastName}} cancelled an upcoming booking. The cancellation policy DOES NOT apply.",
    BOOKING_APPOINTMENT_CANCELLED_BY_PAYER: "{{firstName}} {{lastName}} cancelled an upcoming booking. The cancellation policy DOES apply.",
    BOOKING_LODGED_PAYER: "We have lodged the return from your booking that took place on {bookingDate}.",
    BOOKING_LODGED: "Your booking with {payerFirstName} {payerLastName} has been marked as Lodged.",
    BOOKING_CONFIRM_APPOINTMENT_REMINDER: "You have an appointment with {{name}}",
    ACCT_REPORTED: "The Taxpayer gave the following comment: {comment}",
    PENDING_BOOKING_REMINDER: "You have {count} requests for appointments which have not been actioned yet. You have 12 hours to respond or else they will be automatically declined.",
    BOOKING_CONFIRM_APPOINTMENT_EMAIL: "{{firstName}} {{lastName}} has booked an appointment with you on {day} {date} at {time} (AWST) at {locAddr}.",
    APPROVE_ACCT: "You can now get started with Quax. Head to your calendar now to get started",
    DECLINE_ACCT: "Application declined",
    BOOKING_CANCELLED_EMAIL: "{{taxPayerFirstName}} {{taxPayerLastName}} has cancelled their appointment with you on {date} at {time} (AWST) at {locAddr}",
    ACCT_NO_SHOW_FOR_ADMIN: "{{firstName}} {{lastName}} didn't show up to a booking",
    PAYER_NO_SHOW_FOR_ADMIN: "{{firstName}} {{lastName}} didn't show up to a booking",
    PAYER_NO_SHOW_FOR_PAYER: "We apologise for any inconvenience and have added a $100 credit towards your next booking.",
    ACCT_NO_SHOW: "You were a no show for your appointment with {taxPayerFirstName} {taxPayerLastName} on {date} at {time} (AWST) at {locAddr}",
    BOOKING_LODGED_EMAIL: "Your booking with {payerFirstName} {payerLastName}  has been marked as Lodged.",
    SUSPEND_ACCT: "User Suspended",
    UNSUSPEND_ACCT: "User Unsuspended",
    ADMIN_CREATE_PASSWORD: "Hi {firstName}, You've been added as an Admin user on Quax.Click the link below to set your password and access your account. {link}  ",
    BOOKING_REQUESTED: "{{taxPayerFirstName}} {{taxPayerLastName}} has requested an appointment with you on {day} {date} at {time} (AWST) at {locAddr}. Please respond within the next 24 hours or we will have to decline it on your behalf.",
    NEW_ACCOUNTANT_COMPLETED_APPLICATION: "{{firstName}} {{lastName}} has completed their application! Review their application now.",
    ACCOUNTANT_PROFILE_UPDATED: "The following details were updated: {{fields}}",
    USR_NOT_RES_TO_PENDING_BKG_WTH_24_HR: "You failed to respond to a booking request within the required 24 hours and so we had to decline it. Please make sure you check your account daily to avoid this happening in the future.",
    BOOKING_DECLINED_BY_ACCOUNTANT: "Unfortunately your booking request was declined. Head to the search page to re-book.",
    ONE_DAY_BOOKING_CONFIRM_APPOINTMENT_REMINDER: "You have a booking scheduled for tomorrow at {time} (AWST). {locAddr}",
    ONE_HOUR_BOOKING_CONFIRM_APPOINTMENT_REMINDER: "Your Quax booking starts in 1 hour!",
    PAYER_NO_SHOW_BY_ACCT_FOR_PAYER: "You've been charged a $100 No Show Fee due to a late cancellation.",
    BOOKING_CANCELLED_BY_PAYER_WITHFEE: "You've been charged a $50 Cancellation Fee due to a late cancellation.",
    BOOKING_CANCELLED_BY_ACCOUT_WITHFEE: "We apologise for any inconvenience and have added a 10% credit towards your next booking.",
    BOOKING_CANCELLED_BY_ADMIN_FOR_ACCT: "Your Booking with {payerFirstName} {payerLastName} has been cancelled by Quax!",
    BOOKING_CANCELLED_BY_ADMIN_FOR_PAYER: "Your Booking on {bookingDate} has been cancelled by Quax! We apologise for any inconvenience. Head to the search page to create a new booking.",
    TOM_UPCOMING_BOOKING_REMINDER: "You have {count} appointments tomorrow.",
    BOOKIN_WAITING_ON_INFO_FOR_PAYER: "Your booking with {acctFirstName} {acctLastName} has been marked as Waiting on Info."
};
// Notification title
const NOTI_TITLE = {
    BOOKING_CONFIRM_APPOINTMENT: "Booking Request Accepted",
    BOOKING_CANCELLED_BY_PAYER_WITHFEE: "Late Cancellation",
    REVIEW_FOR_ACCT: "New Review!",
    PAYER_NO_SHOW_FOR_PAYER: "We've given you $100 Credit",
    BOOKING_APPOINTMENT_CANCELLED: "Your appointment has been cancelled!",
    BOOKING_APPOINTMENT_CANCELLED_BY_PAYER: "Booking {_id} Cancelled by Taxpayer within 48 hours",
    BOOKING_APPOINTMENT_CANCELLED_BY_ACCT: "Booking {_id} Cancelled by Accountant within 48 hours",
    BOOKING_REQUEST_CANCELLED_BY_ACCT_NO_PLOICY: "Booking {_id} Cancelled by Accountant",
    BOOKING_REQUEST_CANCELLED_BY_PAYER_NO_PLOICY: "Booking {_id} Cancelled by Taxpayer",
    BOOKING_LODGED: "Booking marked as Lodged",
    BOOKING_LODGED_PAYER: "Your return was successfully lodged!",
    BOOKING_CONFIRM_APPOINTMENT_REMINDER: "Reminder: Booking in 7 days!",
    ACCT_REPORTED: "{acctFirstName} {acctLastName} has been reported",
    PENDING_BOOKING_REMINDER: "Reminder - Pending Bookings",
    BOOKING_CONFIRM_APPOINTMENT_EMAIL: "New Booking!",
    APPROVE_ACCT: "Application Approved",
    DECLINE_ACCT: "Application declined",
    BOOKING_CANCELLED_EMAIL: "Cancellation",
    ACCT_NO_SHOW: "You were a no show!",
    ACCT_NO_SHOW_FOR_ADMIN: "Booking {_id} No Show by Accountant",
    PAYER_NO_SHOW_FOR_ADMIN: "Booking {_id} No Show by Taxpayer",
    BOOKING_LODGED_EMAIL: "Booking marked as Lodged",
    SUSPEND_ACCT: "User Suspended",
    UNSUSPEND_ACCT: "User Unsuspended",
    ADMIN_CREATE_PASSWORD: "QUAX You've been added as Admin",
    ACCT_CREATE_PASSWORD: "QUAX You've been added as Accountant",
    ACCT_CREATE_PASSWORD_BY_ADMIN: "QUAX You've been added as Accountant",
    TAXPAYER_CREATE_PASSWORD: "QUAX You've been added as Taxpayer",
    BOOKING_REQUESTED: "Pending Booking Request",
    NEW_ACCOUNTANT_COMPLETED_APPLICATION: "New Application!",
    ACCOUNTANT_PROFILE_UPDATED: "{{firstName}} {{lastName}} has updated their profile.",
    USR_NOT_RES_TO_PENDING_BKG_WTH_24_HR: "We had to decline your booking",
    BOOKING_DECLINED_BY_ACCOUNTANT: "Booking Request Declined",
    ONE_DAY_BOOKING_CONFIRM_APPOINTMENT_REMINDER: "Reminder: Booking in 1 day!",
    ONE_HOUR_BOOKING_CONFIRM_APPOINTMENT_REMINDER: "Reminder: Booking in 1 hour!",
    PAYER_NO_SHOW_BY_ACCT_FOR_PAYER: "You were a No Show",
    BOOKING_CANCELLED_BY_ACCOUT_WITHFEE: "Your Appointment has been Cancelled!",
    BOOKING_CANCELLED_BY_ADMIN_FOR_ACCT: "Booking Cancelled by Admin!",
    BOOKING_CANCELLED_BY_ADMIN_FOR_PAYER: "Your Booking has been Cancelled by Admin!",
    TOM_UPCOMING_BOOKING_REMINDER: "Reminder! Appointments Tomorrow",
    BOOKIN_WAITING_ON_INFO_FOR_PAYER: "Booking marked as Waiting on Info"
};
const AVAILABILITY_PERIOD = 3;
const BOOKING_SLOT = 2700000; // 45 minute into milliseconds
const SEARCH_BY = {
    ALL: "all"
};
const BOOKING_DECLINED_TIME = 24 * 60 * 60 * 1000; // 24 hour milliseconds
const BOOKING_APPOINTMENT_REMINDER = {
    ONE_WEEK: 168 * 60 * 60 * 1000, // 1 week timestamp in ms
    ONE_DAY: 24 * 60 * 60 * 1000, // 1 day timestamp in ms
    ONE_HOUR: 1 * 60 * 60 * 1000, // 1 hour in ms
    FIFTEEN_MINUTE: 15 * 60 * 1000,
    TWELVE_HOUR: 12 * 60 * 60 * 1000
};

const EMAIL_TYPE = {
    ADMIN_CREATE_PASSWORD: 1
};

const ONE_DAY_TIMESTAMP = 86400000

const FEEDBACK = {
    SUBJECT: "Quax Feedback #{{feedbackID}}"
};

const BOOKING_MARK_STATUS = {
    NO_SHOW: 0,
    UPCOMING: 1,
    DECLINED: 2,
    COMPLETE: 3,
    CANCELLED: 4
};

const BOOKING_LAPSED_TIME = 15 * 60 * 1000; // 15 minutes in ms
const ANIMATED_MEDIA = {
    GIF: ".gif"
};

const SUPPORTED_IMAGE_TYPE = /jpeg|jpg|gif|bmp|png/;
const SUPPORTED_DOC_TYPE = /jpeg|jpg|gif|bmp|pdf|docx|dotx|document/;
//const FORGOT_PASSWORD_EXPIRE_TIME = 24 * 60 * 60 * 1000;
const FORGOT_PASSWORD_EXPIRE_TIME = 10 * 60 * 1000 * 6 * 24;
const USER_DB_STATUS = {
    SIGN_UP_INCOMPLETE : 'signupIncomplete',
    INCOMPLETE : 'incomplete',
    ACTIVE: 'active',
    PENDING_APPOVAL: 'pendingApproval',
    DECLINED : 'declined',
    SUSPENDED : 'suspended'
};

const USER_READABLE_STATUS = {
    SIGN_UP_INCOMPLETE : 'Unverified',
    INCOMPLETE : 'Incomplete',
    ACTIVE: 'Active',
    PENDING_APPOVAL: 'Pending',
    DECLINED : 'Declined',
    SUSPENDED : 'Suspended'
};

const JWT_TOKEN_EXPIRE_TIME = 1814400000; // 21 Days milliseconds
//========================== Export Module Start ==============================

module.exports = Object.freeze({
    APP_NAME: 'Revel',
    ROUTE_PREFIX: "/revel/",
    STATUS_CODE: STATUS_CODE,
    STATUS: STATUS,
    SUCCESS_MESSAGES,
    ERROR_MESSAGES,
    TITLES,
    QUEUES_NAME,
    DB_MODEL_REF,
    GENDER,
    VALUES,
    MEDIA_TYPE,
    USR_IMG_PATH,
    ROLE,
    DATE_FORMAT,
    BOOKING_STATUS,
    BOOKING_SLOT,
    AVAILABILITY_SLOT,
    AVAILABILITY_PERIOD,
    AVAIL_SERIES,
    PAGE_LIMIT: 20,
    AVAILABILITY_LIMIT: 8,
    LATEST_REVIEW_COUNT: 5,
    SEARCH_BY,
    ADMIN_USER_PAGE_LIMIT: 100,
    LAST_AVAILABILITY_SLOT,
    ACCESS_API_WITHOUT_ACTIVE_STATUS,
    RESPONSE_STATUS_CODE,
    FILTER_BY_LAST_DAY,
    LAST_DAY,
    BOOKING_CREATED_BY,
    BOOKING_DECLINED_TIME,
    BOOKING_ACTION,
    LOGOUT_ERROR_CODE,
    NOTI_MESSAGES,
    PAYMENT_TYPE,
    NOTI_TYPE,
    //ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV,
    NOTI_TITLE,
    NOTI_MSG,
    BOOKING_APPOINTMENT_REMINDER,
    DOC_FILENAME,
    BOOKING_FIELD_TO_SHOW,
    BOOKING_FIELD_TO_SHOW_FOR_CSV,
    EMAIL_TYPE,
    BOOKING_STATUS_ARR,
    FEEDBACK,
    NO_SHOW_FEE_CHARGE,
    BOOKING_MARK_STATUS_ARR,
    BOOKING_MARK_STATUS,
    BOOKING_LAPSED_TIME,
    ANIMATED_MEDIA,
    SUPPORTED_IMAGE_TYPE,
    SUPPORTED_DOC_TYPE,
    REIMBURSEMENTS,
    FORGOT_PASSWORD_EXPIRE_TIME,
    TAXPAYER_CREDIT_FEE,
    USER_FIELD_ARRAY,
    READABLE_USER_FIELD_ARRAY,
    ONE_DAY_TIMESTAMP,
    METRICES_FEILD_TO_SHOW_FOR_CSV,
    //TAXPAYER_FEILD_TO_SHOW_FOR_CSV,
    ADMIN_BOOKING_FIELD_TO_SHOW_FOR_CSV,
    ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_ALL,
    ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_ACTIVE,
    ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_PENDING,
    ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_DECLINED,
    ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_SUSPENDED,
    ACCOUNTANT_FEILD_TO_SHOW_FOR_CSV_STATUS_BY_INCOMPLETE,
    TAXPAYER_FEILD_TO_SHOW_FOR_CSV_ALL,
    TAXPAYER_FEILD_TO_SHOW_FOR_CSV_ACTIVE,
    TAXPAYER_FEILD_TO_SHOW_FOR_CSV_SUSPENDED,
    TAXPAYER_FEILD_TO_SHOW_FOR_CSV_UNVERIFIED,
    //Admin Booking Fields to show
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_ALL,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_PENDING,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_UPCOMING,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_OVERDUE,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_PENDING_LODGEMENT,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_LODGED,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_WAITING_ON_INFO,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_NO_SHOW,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_CANCELLED,
    ADMIN_BOOKING_FEILD_TO_SHOW_FOR_CSV_DECLINED,
    USER_DB_STATUS,
    USER_READABLE_STATUS,
    JWT_TOKEN_EXPIRE_TIME,
    METRICES_FEILD_TO_SHOW_FOR_CSV_READABLE,
    COST_ROUND_PLACE: 2
});

//========================== Export Module End ===============================
