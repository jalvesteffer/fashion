import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  // transaciton details
  openTransaction: any;
  name: string;
  orderNum: number;
  orderTotal: number;
  address: string;

  // stripe
  stripe: any;
  card: any;
  clientSecret: any;

  checkoutForm: any;
  cardHolderName: string;

  headerText: string = "GC Fashion Checkout";
  headerImage: string = "checkout";
  message: string;
  linkText: string;


  constructor(
    private shopService: ShopService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getTransactionDetails();
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.checkoutForm = new FormGroup({
      cardHolderName: new FormControl(this.cardHolderName),
    });
  }

  // called after component's view fully initialized
  ngAfterViewInit() {

    var style = {
      base: {
        color: "#32325d",
      }
    };

    this.stripe = Stripe(environment.stripePublishKey);

    const elements = this.stripe.elements();
    this.card = elements.create("card", { style: style });
    this.card.mount("#card-element");

    // displays error messages for invalid input
    this.card.on('change', ({ error }) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });
  }

  getTransactionDetails() {
    let userId = 1;
    this.shopService.getAll(`${environment.salesUrl}${environment.getOpenTransactionURI}${userId}`)
      .subscribe((res) => {
        this.openTransaction = res;
        this.name = this.openTransaction.user.fullName;
        this.orderNum = this.openTransaction.transactionId;
        this.orderTotal = this.openTransaction.total;
        this.address = this.openTransaction.user.address;
      },
        (error) => {
          throw new Error("Error in getTransactionDetails()");
        }
      );
  }

  submit() {
    console.log("submit method");

    // create a new transaction with item user added to cart
    const transaction = {
      userId: 1,
      total: this.orderTotal
    }

    this.shopService.postObj(`${environment.salesUrl}${environment.postCheckoutURI}`, transaction)
      .subscribe((res) => {
        this.clientSecret = res;

        this.confirm();
      },
        (error) => {
          throw new Error("Error in getTransactionDetails()");
        }
      );




  }


  confirm() {
    this.stripe.confirmCardPayment(this.clientSecret.client_secret, {
      payment_method: {
        card: this.card,
        billing_details: {
          name: this.name
        }
      }
    }).then(function (result) {
      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          const button = document.querySelector('button');
          button.disabled = true;
        }
      }
    });
    this.headerText = "Order Confirmed";
    this.headerImage = "confirmation";
    this.message = "Good News! Your Order has been Received!";
    this.linkText = "Return to Main Page";
  }

}
