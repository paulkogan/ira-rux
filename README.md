# ira-rux
New IRA front-end using React, Redux 

IRA is a reporting application for GP that generates portfolio and investor net-worth reports. 
The original IRA application, including the business logic and admin screens, provides a REST API layer that IRA-rux consumes. 
Here are more details:

BUSINESS PURPOSE
IRA is a web-based application for tracking and reporting on Investor ownership in real-estate deals.
Financial analysts for GP Properties, a real estate developer and investment trust, update transactions leading up to a deal capitalization. At the key closing date, the investor ownership information is "set" and all investors are assigned an ownership % in the deal. 
Subsequently, investors need to understand the value of their investment portfolio with GPP by accessing reports, primarily the Investor Portfolio report. The portfolio pulls together the investor's information across multiple deals, accounting for updates in property valuation and subsequent financings such as roll-overs and capital-calls. 
Investors can be individual investors or investment entities, such as LLCs, trusts, holding companies etc. Investments can be "nested",  with entities holding "ownership interests"  in other entities. These ownership interests need to be calculated up the chain when the value or ownership of a given deal or investment entity changes.


TABLES
* Transactions - records of investments, adjustments to ownership. 
I.E. John Smith invested + wired $800,000 for Deal A.

* Entities - the all-purpose entity, covering all participants in investments. Types of Entity are:
- Deal - has upstream investors
- Investor (person) - has downstream investments
- Investment Entity  - has both upstream investors and downstream investments
- Pass-thru Entity

 * Ownership - a record of % ownership in a Deal or Entity. Such as: 
ownership = {
investor_id : 5, 
investment_entity_id : 17, 
pct_own : 5.7%
}

Multiple transactions (such as multiple wires of $$) need to be combined into a single Ownership record

* Deals - holds details of a Deal, with Property Valuation information, critically, the equity value of a deal. Each deal has a 1-1 corresponding Entity record.
When calculating an investor's Investment_Value in a deal, it's deal_equity_value (which can change as the property is re-evaluated) * investor_Own_pct (which stays fixed after the deal is "set")


CODE FILES
* ira.js  
	* runs the main Node Express server on 8081
	* serves the key routes for adding & updating such as 
			/add-transaction'
/setownership/:id'

	* also has the Auth/login functions for Passport
	* also has the api files (which I need to move out)

* ira-model.js (exported as iraSQL)
	* holds the 31 SQL functions, including: 
			  getOwnershipForEntity,
  getOwnershipForInvestorAndEntity,
  getTransactionsForInvestorAndEntity,
  getTransactionsByType,
  updateEntityImpliedValue,
  updateDeal,
  clearOwnershipForEntity,
  deleteTransaction
  authUser


* ira-calc.js
	holds the 12 calculating worker functions, including:
  totalupInvestorPortfolio,
  totalupCashInDeal,
  calculateOwnership,
  calculateDeal,
  calcInvEntityImpliedValue,
  updateValueofInvestorsUpstream,
  getInvestorEquityValueInDeal,
  createCSVforDownload
	
also has HBS helper formatting functions

*ira-menus.js 
	the second routes file, hold routes involved in display such as:
			/transactions/:id
/ownership/:id
/portfolio/:id
/entities
/home


*Views
the Express routes perform calculations and then hand off to one of 22 Handlebar view files to render HTML in the client, including:

add-deal.hbs
add-entity.hbs
entity-details.hbs
home.hbs
investors.hbs
set-ownership.hbs
show-results.hbs
update-deal.hbs
update-entity.hbs

* ira.test
	Mocha tests file

