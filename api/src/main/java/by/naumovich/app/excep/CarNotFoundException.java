package by.naumovich.app.excep;

public class CarNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6092889714484302132L;

	public CarNotFoundException() {
	}

	public CarNotFoundException(String arg0) {
		super(arg0);
	}

	public CarNotFoundException(Throwable arg0) {
		super(arg0);
	}

	public CarNotFoundException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public CarNotFoundException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
		super(arg0, arg1, arg2, arg3);
	}

}
