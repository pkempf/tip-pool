describe("Utility functions test, with setup and tear-down", function () {
  beforeEach(function () {
    // console.log("Running helpers setup");

    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("should add up all tip payments when sumPaymentTotal('tipAmt') is called", function () {
    console.log("Helpers test - sumPaymentTotal('tipAmt')");

    expect(sumPaymentTotal("tipAmt")).toBe(20);

    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toBe(50);
  });

  it("should add up all bill payments when sumPaymentTotal('billAmt') is called", function () {
    console.log("Helpers test - sumPaymentTotal('billAmt')");

    expect(sumPaymentTotal("billAmt")).toBe(100);

    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toBe(250);
  });

  it("should calculate the percent of a single tip when calculateTipPercent() is called", function () {
    console.log("Helpers test - calculateTipPercent()");

    expect(calculateTipPercent(100, 20)).toBe(20);
    expect(calculateTipPercent(120, 30)).toBe(25);
    expect(calculateTipPercent(400, 0)).toBe(0);
  });

  it("should add a new td with innerText of value when appendTd() is called", function () {
    console.log("Helpers test - appendTd()");

    let newTr = document.createElement("tr");
    appendTd(newTr, "hello");

    expect(newTr.children.length).toBe(1);
    expect(newTr.firstChild.innerText).toBe("hello");
  });

  it("should add a delete button when appendDeleteBtn() is called", function () {
    console.log("Helpers test - appendDeleteBtn()");

    let newTr = document.createElement("tr");
    appendDeleteBtn(newTr);

    expect(newTr.children.length).toBe(1);
    expect(newTr.firstChild.innerText).toBe("X");
  });

  afterEach(function () {
    // console.log("Running helpers tear-down");

    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
