package app.core;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import app.core.entities.Company;
import app.core.entities.Coupon;
import app.core.entities.Coupon.Category;
import app.core.entities.Customer;
import app.core.services.AdminService;
import app.core.services.CompanyService;

@Component
@Order(1)
public class RegistrationDemo implements CommandLineRunner {

	@Autowired
	private AdminService adminService;

	@Autowired
	private ApplicationContext ctx;

	@Override
	public void run(String... args) throws Exception {

		System.out.println("\n\t\t\t\t==================================== ");
		System.out.println("\t\t\t\t============ REGISTRATION DEMO ============ ");
		System.out.println("\t\t\t\t==================================== ");

		System.out.println("\n========== ADMIN CREATE COMPANIES ==========");
		Company company1 = ctx.getBean(Company.class);
		company1.setName("Osem");
		company1.setEmail("osem@mail");
		company1.setPassword("osem");
		company1.setLogoImage("https://upload.wikimedia.org/wikipedia/he/2/22/Osem_Logo.svg");

		Company company2 = ctx.getBean(Company.class);
		company2.setName("Teva");
		company2.setEmail("teva@mail");
		company2.setPassword("teva");
		company2.setLogoImage(
				"https://findlogovector.com/wp-content/uploads/2018/12/teva-pharmaceutical-industries-logo-vector.png");

		Company company3 = ctx.getBean(Company.class);
		company3.setName("Gali");
		company3.setEmail("gali@mail");
		company3.setPassword("gali");
		company3.setLogoImage(
				"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/51f7127620af4ed2707f");
		System.out.println(company1);
		System.out.println(company2);
		System.out.println(company3);

		System.out.println("\n========== COPMANIES CREATE COUPONS ==========");
		Coupon coupon1 = ctx.getBean(Coupon.class);
		coupon1.setCategory(Category.CAMPING);
		coupon1.setTitle("Tent");
		coupon1.setDescription("Tent for 3 people");
		coupon1.setStartDate(LocalDate.of(2023, 1, 1));
		coupon1.setEndDate(LocalDate.of(2023, 12, 31));
		coupon1.setAmount(18);
		coupon1.setPrice(180);
		coupon1.setImage(
				"https://contents.mediadecathlon.com/p1801201/k$0a8edcb82a4529014a350391aff69c8b/trekking-3-seasons-freestanding-3-person-tent-trek-500-grey-orange.jpg?format=auto&quality=40&f=800x800");

		company1.addCoupon(coupon1);
		adminService.addCompany(company1); // Company register at repository with coupon
		System.out.println("\n" + company1);
		System.out.println(coupon1);

		Coupon coupon2 = ctx.getBean(Coupon.class);
		coupon2.setCategory(Category.FOOD);
		coupon2.setTitle("White bread");
		coupon2.setDescription("10% discount");
		coupon2.setStartDate(LocalDate.of(2023, 1, 1));
		coupon2.setEndDate(LocalDate.of(2023, 12, 31));
		coupon2.setAmount(10);
		coupon2.setPrice(7);
		coupon2.setImage("https://www.goldmedalbakery.com/content/uploads/2019/12/Sandwich-White.jpg");

		company2.addCoupon(coupon2);
		adminService.addCompany(company2);// Company register at repository with coupon no. 2
		System.out.println("\n" + company2);
		System.out.println(coupon2);

		Coupon coupon3 = ctx.getBean(Coupon.class);
		coupon3.setCategory(Category.SPORTS);
		coupon3.setTitle("Sports Shoes");
		coupon3.setDescription("8% discount");
		coupon3.setStartDate(LocalDate.of(2023, 1, 1));
		coupon3.setEndDate(LocalDate.of(2023, 12, 10));
		coupon3.setAmount(15);
		coupon3.setPrice(180);
		coupon3.setImage("https://s3.eu-west-2.amazonaws.com/media.getit.co.il/Products/Huge/121820.jpg");

		company3.addCoupon(coupon3);

		Coupon coupon4 = ctx.getBean(Coupon.class);
		coupon4.setCategory(Category.CLOTHINGS);
		coupon4.setTitle("Cool Jeans");
		coupon4.setDescription("buy 2 get 1 free");
		coupon4.setStartDate(LocalDate.of(2023, 1, 1));
		coupon4.setEndDate(LocalDate.of(2023, 12, 31));
		coupon4.setAmount(30);
		coupon4.setPrice(220);
		coupon4.setImage(
				"https://cdn.shopify.com/s/files/1/0299/8563/6396/products/jeans_dsquared2_blu_222431uje000006-470n-3_4000x@2x.progressive.jpg?v=1673309803");

		company3.addCoupon(coupon4);

		Coupon coupon5 = ctx.getBean(Coupon.class);
		coupon5.setCategory(Category.CLOTHINGS);
		coupon5.setTitle("OLD Jeans");
		coupon5.setDescription("buy 2 get 1 free");
		coupon5.setStartDate(LocalDate.of(1980, 1, 1));
		coupon5.setEndDate(LocalDate.of(1981, 4, 1));
		coupon5.setAmount(30);
		coupon5.setPrice(220);
		coupon5.setImage(
				"https://cdn.shopify.com/s/files/1/0299/8563/6396/products/jeans_dsquared2_blu_222431uje000006-470n-3_4000x@2x.progressive.jpg?v=1673309803");

		company3.addCoupon(coupon5);

		adminService.addCompany(company3);// Company register at repository with 3 coupons

		System.out.println("\n" + company3);
		System.out.println(coupon3);
		System.out.println(coupon4);
		System.out.println(coupon5);

		Coupon coupon6 = ctx.getBean(Coupon.class);
		coupon6.setCategory(Category.FOOD);
		coupon6.setTitle("White bread1");
		coupon6.setDescription("10% discount");
		coupon6.setStartDate(LocalDate.of(2000, 1, 1));
		coupon6.setEndDate(LocalDate.of(2000, 12, 31));
		coupon6.setAmount(10);
		coupon6.setPrice(7);
		coupon6.setImage("https://www.goldmedalbakery.com/content/uploads/2019/12/Sandwich-White.jpg");

		company2.addCoupon(coupon6);
		adminService.updateCompany(company2);// adding a coupon to exacting company by update

		System.out.println("company knows its coupons:\n" + company2.getCoupons());
		System.out.println("coupon knows its company id!: " + coupon6.getCompany().getId());

		System.out.println("\n==========ADMIN CREATE CUSTOMERS ==========");
		Customer customer1 = ctx.getBean(Customer.class);
		customer1.setFirstName("Dina");
		customer1.setLastName("Levi");
		customer1.setEmail("dina@gmail.com");
		customer1.setPassword("dina");
		customer1.setUserName("Din Din");
		adminService.addCustomer(customer1);

		Customer customer2 = ctx.getBean(Customer.class);
		customer2.setFirstName("Dan");
		customer2.setLastName("Ramon");
		customer2.setUserName("Darmon");
		customer2.setEmail("ramon@mail");
		customer2.setPassword("ramo");
		adminService.addCustomer(customer2);

		Customer customer3 = ctx.getBean(Customer.class);
		customer3.setFirstName("Richard");
		customer3.setLastName("Badash");
		customer3.setUserName("Richie");
		customer3.setEmail("richard@gmail.com");
		customer3.setPassword("rich");
		adminService.addCustomer(customer3);

		System.out.println("\nRegistred Customers: ");
		System.out.println(adminService.getAllCustomers());

	}
}