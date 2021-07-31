Salary Slip Kata

# DOING

- Calculate the taxable income

# TODO

- Extract the salarySlipGenerator in the tests
- Add support for `taxFreeAllowance` to the `SalarySlip`
- Add support for `taxPayable` to the `SalarySlip`

- Taxable income: Any amount of money earned above a gross annual salary of £11,000.00 is taxed at 20%

  - Example: For an annual gross salary of £12,000.00

    Employee ID: 12345
    Employee Name: John J Doe
    Gross Salary: £1,000.00
    National Insurance contributions: £30

    Tax-free allowance: £916.67
    Taxable income: £83.33
    Tax Payable: £16.67

Taxable income of a gross salary of 12,000.00 is 12,000.00 - 11,000.00 = 1000 in a year
Taxable income per month = Taxable income per year / months in a year = 1000 / 12 = 83.33
On the Taxable income we have to calculate the 20% of taxes = 83.33 \* 0.2 = 16.67
The tax-free allowance is calculated as month gross salary minus the taxable income = 1000 - 83.33 = 916.67
The total amount of money I will get each month, including taxes is: monthly gross salary - tax payable = 983.33
