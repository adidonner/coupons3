package app.core.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import app.core.entities.Company;
import app.core.entities.Coupon;
import app.core.entities.Coupon.Category;
import app.core.exceptions.CompaniesException;
import app.core.exceptions.CouponsException;
import app.core.repositories.CompanyRepo;
import app.core.repositories.CouponRepo;

/**
 * @author adido
 *
 */
@Service
@Transactional
public class CompanyService extends ClientService {

	@Autowired
	private CompanyRepo companyRepo;
	@Autowired
	private CouponRepo couponRepo;

	public Coupon addCouponToCompany(int companyId, Coupon coupon) throws CouponsException {
		if (!this.couponRepo.existsById(coupon.getId())) {
			Company company = companyRepo.findById(companyId)
					.orElseThrow(() -> new CompaniesException("Company id: " + companyId + " not found"));
			company.addCoupon(coupon);
			companyRepo.save(company);
//			coupon.setCompany(company);
			return coupon;
		} else {
			throw new CouponsException(
					"addCouponToCompany failed - a coupon with this id already exists" + coupon.getId());
		}
	}

//	public Coupon updateCoupon(Company company, Coupon coupon) throws CouponsException {
////		getCouponById( companyId, coupon.getId());
//		//		coupon.setCompanyId(companyId);
//		coupon.setCompany(company);
////		coupon.setCustomers(getCouponById(companyId, coupon.getId()).getCustomers());
//		return couponRepo.save(coupon);
//	}
	public Coupon updateCoupon(int companyId, Coupon coupon) throws CouponsException {
		coupon.setCompany(getCompanyDetails(companyId));
		coupon.setCustomers(getCouponById(companyId, coupon.getId()).getCustomers());
		return couponRepo.save(coupon);
	}

	/**
	 * @param couponId
	 * @return coupon
	 * @throws CouponsException if the specified coupon not exists
	 */
	public Coupon getCouponById(int companyId, int couponId) throws CouponsException {
		Coupon coupon = couponRepo.findById(couponId)
				.orElseThrow(() -> new CouponsException("Coupon Id: " + couponId + " not found "));
//		if (coupon.getCompanyId() != companyId) {
//			throw new CouponsException("This coupon does not belong to company id: " + companyId);
//		}
		return coupon;
	}

	public void deleteCouponById(int companyId, int couponId) throws CouponsException {
		Coupon coupon = couponRepo.findById(couponId)
				.orElseThrow(() -> new CouponsException("Coupon Id: " + couponId + " not found "));
//		if (coupon.getCompanyId() != companyId) {
//			throw new CouponsException("This coupon does not belong to company id: " + companyId);
//		}
		couponRepo.delete(coupon);
	}

	public List<Coupon> getCouponsForCompany(int companyId) {
		return companyRepo.findById(companyId).get().getCoupons();
	}

	public List<Coupon> getAllCompanyCouponsByCategory(int companyId, Category category) {
		return couponRepo.findAllByCompanyIdAndCategory(companyId, category);
	}

	public List<Coupon> getAllCompanyCouponsLessThanMaxPrice(int companyId, double maxPrice) {
		List<Coupon> coupons = couponRepo.findAllByCompanyIdAndPriceLessThan(companyId, maxPrice);
		return coupons;
	}

	/**
	 * @param coupon
	 * @return
	 * @throws CouponsException if the specified coupon not exists
	 */

	public Company getCompanyDetails(int companyId) throws CompaniesException {
		return companyRepo.findById(companyId)
				.orElseThrow(() -> new CompaniesException("getCompanyDetails failed - not found"));
	}

}
