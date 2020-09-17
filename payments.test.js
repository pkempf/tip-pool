describe("Payments test, with setup and tear-down", function () {
  beforeEach(function () {
    // console.log("Running payments setup");

    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it("should add a new payment to allPayments on submitPaymentInfo()", function () {
    console.log("Payments test - submitPaymentInfo()");

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toBe(1);
    expect(allPayments["payment1"].billAmt).toBe("100");
    expect(allPayments["payment1"].tipAmt).toBe("20");
    expect(allPayments["payment1"].tipPercent).toBe(20);
  });

  it("shouldn't add a new payment if submitPaymentInfo() has empty input", function () {
    console.log("Payments test - submitPaymentInfo() with empty input");

    billAmtInput.value = "";
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toBe(0);
  });

  it("should update #paymentTable when appendPaymentTable() is called", function () {
    console.log("Payments test - appendPaymentTable()");

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    let testPayment = createCurPayment();
    allPayments["payment1"] = testPayment;
    appendPaymentTable(testPayment);

    let currentTdList = document.querySelectorAll("#paymentTable tbody tr td");

    expect(currentTdList.length).toBe(4);
    expect(currentTdList[0].innerText).toBe("$100");
    expect(currentTdList[1].innerText).toBe("$20");
    expect(currentTdList[2].innerText).toBe("20%");
    expect(currentTdList[3].innerText).toBe("X");
  });

  it("should make a new payment when createCurPayment() is called", function () {
    console.log("Payments test - createCurPayment()");

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    let expectedPayment = {
      billAmt: "100",
      tipAmt: "20",
      tipPercent: 20,
    };

    let testPayment = createCurPayment();

    expect(testPayment).toEqual(expectedPayment);
  });

  it("shouldn't make a new payment when createCurPayment() is called with empty input", function () {
    console.log("Payments test - createCurPayment() with empty input");

    billAmtInput = "";
    tipAmtInput = "";

    let testPayment = createCurPayment();
    expect(testPayment).toEqual(undefined);
  });

  afterEach(function () {
    // console.log("Running payments tear-down");

    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
